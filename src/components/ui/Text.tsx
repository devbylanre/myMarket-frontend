import React from 'react';
import { cn } from '../../utils/util';
import { cva, VariantProps } from 'class-variance-authority';

const textVariants = cva('', {
  variants: {
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
  },
  defaultVariants: {
    size: 'md',
    weight: 400,
  },
});

interface TextOwnProps<E extends React.ElementType> {
  className?: string;
  as?: E;
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentPropsWithRef<E>, keyof TextOwnProps<E>> &
  VariantProps<typeof textVariants>;

export const Text = <E extends React.ElementType = 'div'>(
  props: TextProps<E>
) => {
  const { as, className, size, weight, ...rest } = props;
  const Component = as || 'div';

  return (
    <Component
      className={cn(textVariants({ size, weight, className }))}
      {...rest}
    />
  );
};
