import type {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react';

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
  offset?: number;
  style?: CSSProperties;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className' | 'style'>;

export default function Reveal<T extends ElementType = 'div'>({
  as,
  children,
  className,
  delay,
  offset,
  style,
  ...props
}: RevealProps<T>) {
  const Component = as ?? 'div';

  return (
    <Component
      data-reveal
      className={className}
      style={
        {
          ...style,
          ...(typeof delay === 'number' ? { '--reveal-delay': `${delay}ms` } : {}),
          ...(typeof offset === 'number' ? { '--reveal-offset': `${offset}px` } : {}),
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </Component>
  );
}
