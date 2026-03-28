import type { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ParallaxProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  speed?: number;
  style?: CSSProperties;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className' | 'style'>;

export default function Parallax<T extends ElementType = 'div'>({
  as,
  children,
  className,
  speed = 0.08,
  style,
  ...props
}: ParallaxProps<T>) {
  const Component = as ?? 'div';

  return (
    <Component
      data-parallax
      data-parallax-speed={speed}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}
