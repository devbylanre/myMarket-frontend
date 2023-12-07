import React from 'react';
import { cn } from '../../utils/util';

const TextVariants = {
  initial: 'text-secondary',
  size: {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
  },

  weight: {
    300: 'font-light',
    400: 'font-normal',
    500: 'font-medium',
    600: 'font-semibold',
    700: 'font-bold',
  },
};

type TextOwnProps<E extends React.ElementType> = {
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl';
  weight?: 300 | 400 | 500 | 600 | 700;
  className?: string;
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = 'div'>(
  props: TextProps<E>
) => {
  const { as, children, className, size = 'md', weight = 400, ...rest } = props;
  const Component = as || 'div';

  return (
    <Component
      className={cn(
        TextVariants.initial,
        TextVariants.size[size],
        TextVariants.weight[weight],
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
