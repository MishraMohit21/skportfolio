import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useDevice } from '../utils/useDevice';

// --- DESKTOP SHADERS (High fidelity, volumetric depth-mapped) ---
const vertexShaderDesktop = `
  uniform float uTime;
  uniform float uSpeed;
  attribute float aScale;
  varying vec3 vPosition;
  varying float vDepth;
  
  void main() {
    vPosition = position;
    
    // Wave displacement representing high-end physical simulation
    vec3 pos = position;
    float waveX = sin(pos.x * 0.4 + uTime * uSpeed) * 0.4;
    float waveY = cos(pos.z * 0.4 + uTime * uSpeed) * 0.4;
    pos.y += waveX;
    pos.x += waveY;
    pos.z += sin(pos.y * 0.3 + uTime * uSpeed) * 0.3;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Size attenuation with distance
    gl_PointSize = aScale * (250.0 / -mvPosition.z);
    
    vDepth = -mvPosition.z;
  }
`;

const fragmentShaderDesktop = `
  varying vec3 vPosition;
  varying float vDepth;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform float uTime;

  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);
    float dist = length(uv);
    
    // Hard boundary clip
    if (dist > 0.5) discard;
    
    // Volumetric sphere depth mapping
    float r = 0.5;
    float sphereDepth = sqrt(max(r * r - dist * dist, 0.0)) / r;
    
    // Simulated chromatic aberration / refraction dispersion based on speed & depth
    float disp = sin(dist * 12.0 - uTime * 3.0) * 0.08;
    vec3 c1 = uColor1 * (1.0 + disp);
    vec3 c2 = uColor2 * (1.0 - disp);
    
    vec3 color = mix(c1, c2, vPosition.y * 0.15 + 0.5);
    
    // High-end glowing distribution
    float glow = smoothstep(0.5, 0.0, dist);
    glow = pow(glow, 2.0) * sphereDepth;
    
    float core = smoothstep(0.12, 0.0, dist);
    vec3 finalColor = color * (glow + core * 0.9);
    
    // Dynamic depth fading (fog)
    float depthFade = clamp(1.0 - (vDepth - 1.0) / 10.0, 0.0, 1.0);
    float alpha = glow * depthFade * 0.85;
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`;

// --- MOBILE SHADERS (Ultra performance, minimal calculations) ---
const vertexShaderMobile = `
  uniform float uTime;
  void main() {
    vec3 pos = position;
    pos.y += sin(pos.x * 0.15 + uTime * 0.3) * 0.08; // extremely cheap movement
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 6.0 * (150.0 / -mvPosition.z); // small size attenuation
  }
`;

const fragmentShaderMobile = `
  uniform vec3 uColor;
  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float distSq = dot(coord, coord); // avoid costly length() or sqrt()
    if (distSq > 0.25) discard;
    
    // Fast linear gradient fallback
    float alpha = (1.0 - distSq * 4.0) * 0.45;
    gl_FragColor = vec4(uColor, alpha);
  }
`;

interface ParticleEngineProps {
  isMobileOverride?: boolean;
  isLowEndOverride?: boolean;
}

export default function ParticleEngine({ isMobileOverride, isLowEndOverride }: ParticleEngineProps) {
  const device = useDevice();
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Allow manual overrides or default to hook values
  const isMobile = isMobileOverride ?? device.isMobile;
  const isLowEnd = isLowEndOverride ?? device.isLowEnd;

  // Determine budget: 1,000 for mobile/low-end, 10,000 for high-end desktop
  const particleCount = isMobile ? 1000 : 10000;

  // Compute static positions once
  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const scl = new Float32Array(particleCount);
    
    // Spread limits
    const rangeX = isMobile ? 8 : 12;
    const rangeY = isMobile ? 6 : 8;
    const rangeZ = isMobile ? 8 : 12;

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * rangeX;
      pos[i * 3 + 1] = (Math.random() - 0.5) * rangeY;
      pos[i * 3 + 2] = (Math.random() - 0.5) * rangeZ;
      
      // Random scales for particle diversity (high-end uses wider variation)
      scl[i] = isMobile ? 1.0 : 0.4 + Math.random() * 2.0;
    }

    return [pos, scl];
  }, [particleCount, isMobile]);

  // Unified uniforms
  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0 },
      uSpeed: { value: 0.4 },
      uColor1: { value: new THREE.Color('#D4AF37') }, // Premium Gold
      uColor2: { value: new THREE.Color('#4f4f66') }, // Deep slate/purple
      uColor: { value: new THREE.Color('#D4AF37') } // Mobile fallback color
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate particle system slowly
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.02;
      pointsRef.current.rotation.x = time * 0.01;
    }

    // Update uniform time
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = time;
    }
  });

  // Pick shader bundle based on hardware profile
  const shaderConfig = useMemo(() => {
    if (isMobile || isLowEnd) {
      return {
        vertexShader: vertexShaderMobile,
        fragmentShader: fragmentShaderMobile,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      };
    }
    return {
      vertexShader: vertexShaderDesktop,
      fragmentShader: fragmentShaderDesktop,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    };
  }, [isMobile, isLowEnd]);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        {!isMobile && !isLowEnd && (
          <bufferAttribute
            attach="attributes-aScale"
            args={[scales, 1]}
          />
        )}
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={shaderConfig.vertexShader}
        fragmentShader={shaderConfig.fragmentShader}
        uniforms={uniforms}
        transparent={shaderConfig.transparent}
        depthWrite={shaderConfig.depthWrite}
        blending={shaderConfig.blending}
      />
    </points>
  );
}
