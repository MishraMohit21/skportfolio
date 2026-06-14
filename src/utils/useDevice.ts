import { useState, useEffect } from 'react';

export interface DeviceInfo {
  isMobile: boolean;
  isLowEnd: boolean;
  isMounted: boolean;
  dpr: number | [number, number];
}

export function useDevice(): DeviceInfo {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLowEnd, setIsLowEnd] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    
    const checkDevice = () => {
      // Check viewport size (standard mobile breakpoint)
      const mobileViewport = window.innerWidth < 768;
      
      // Check User Agent as a secondary signal
      const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      
      // Check hardware concurrency (CPU cores)
      // Older or low-end budget phones typically have 4 cores or fewer
      const lowCpu = typeof navigator !== 'undefined' && navigator.hardwareConcurrency 
        ? navigator.hardwareConcurrency <= 4 
        : false;

      setIsMobile(mobileViewport || mobileUA);
      setIsLowEnd(lowCpu);
    };

    checkDevice();
    
    // Listen to resize events for orientation changes or resizing
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Cap mobile devices to 1.0 (or 0.5-1.0 if low-end), while allowing high-DPI desktop screens to render at 1.5-2.0
  const dpr: number | [number, number] = isMobile 
    ? (isLowEnd ? 0.75 : 1.0) 
    : [1, 2];

  return {
    isMobile,
    isLowEnd,
    isMounted,
    dpr,
  };
}
