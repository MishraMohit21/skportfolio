import ColorBends from './ColorBends';

export default function SceneCanvas() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#030303]">
      <div className="absolute inset-0 opacity-95">
        <ColorBends
          colors={["#FFFFFF", "#EAEAEA", "#FFD700", "#FFE57F"]}
          rotation={92}
          autoRotate={1.2}
          speed={0.35}
          scale={1.02}
          frequency={0.96}
          warpStrength={0.86}
          mouseInfluence={1.2}
          noise={0.04}
          parallax={0.6}
          iterations={2}
          intensity={1.84}
          bandWidth={4.9}
          transparent={false}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 44%, rgba(3, 3, 3, 0.16) 0%, rgba(3, 3, 3, 0.52) 58%, rgba(3, 3, 3, 0.92) 100%)'
        }}
      />
    </div>
  );
}
