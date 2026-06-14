// Global Type Declarations (No top-level import/export to ensure global registration)

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

// Declarations for custom JSX components to satisfy TypeScript compilation
declare module '*/RotatingText' {
  interface RotatingTextProps extends import('react').HTMLAttributes<HTMLSpanElement> {
    texts: string[];
    transition?: any;
    initial?: any;
    animate?: any;
    exit?: any;
    animatePresenceMode?: string;
    animatePresenceInitial?: boolean;
    rotationInterval?: number;
    staggerDuration?: number;
    staggerFrom?: string | number;
    loop?: boolean;
    auto?: boolean;
    splitBy?: string;
    onNext?: (index: number) => void;
    mainClassName?: string;
    splitLevelClassName?: string;
    elementLevelClassName?: string;
  }
  const RotatingText: import('react').ForwardRefExoticComponent<RotatingTextProps & import('react').RefAttributes<any>>;
  export default RotatingText;
}

declare module '*/BounceCards' {
  interface BounceCardsProps {
    className?: string;
    items?: any[];
    containerWidth?: number | string;
    containerHeight?: number;
    animationDelay?: number;
    animationStagger?: number;
    easeType?: string;
    transformStyles?: string[];
    enableHover?: boolean;
    onCardClick?: (item: any) => void;
  }
  const BounceCards: import('react').ComponentType<BounceCardsProps>;
  export default BounceCards;
}

declare module '*/ShinyText' {
  interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
    shineColor?: string;
    color?: string;
  }
  const ShinyText: import('react').ComponentType<ShinyTextProps>;
  export default ShinyText;
}

declare module '*/MagicBento' {
  interface MagicBentoProps {
    items: any[];
    textAutoHide?: boolean;
    enableStars?: boolean;
    enableSpotlight?: boolean;
    enableBorderGlow?: boolean;
    enableTilt?: boolean;
    enableMagnetism?: boolean;
    clickEffect?: boolean;
    spotlightRadius?: number;
    particleCount?: number;
    glowColor?: string;
  }
  const MagicBento: import('react').ComponentType<MagicBentoProps>;
  export default MagicBento;
}

declare module '*/GooeyNav' {
  interface GooeyNavProps {
    items: Array<{ label: string; href: string }>;
  }
  const GooeyNav: import('react').ComponentType<GooeyNavProps>;
  export default GooeyNav;
}

declare module '*/ColorBends' {
  interface ColorBendsProps {
    rotation?: number;
    autoRotate?: number;
    speed?: number;
    colors?: string[];
    transparent?: boolean;
    scale?: number;
    frequency?: number;
    warpStrength?: number;
    mouseInfluence?: number;
    parallax?: number;
    noise?: number;
    iterations?: number;
    intensity?: number;
    bandWidth?: number;
    className?: string;
    style?: import('react').CSSProperties;
  }
  const ColorBends: import('react').ComponentType<ColorBendsProps>;
  export default ColorBends;
}
