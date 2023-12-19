import React from 'react';
import { cn } from '../../utils/util';
import { cva, VariantProps } from 'class-variance-authority';

const textVariants = cva('text-zinc-800', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-2xl sm:text-3xl',
      '4xl': 'text-3xl sm:text-4xl',
      '5xl': 'text-4xl md:text-5xl',
      '6xl': 'text-5xl md:text-6xl',
      '7xl': 'text-6xl md:text-7xl',
    },
    weight: {
      100: 'font-thin',
      200: 'font-extralight',
      300: 'font-light',
      400: 'font-normal',
      500: 'font-medium',
      600: 'font-semibold',
      700: 'font-bold',
    },
    accent: {
      bold: 'text-zinc-950',
      medium: 'text-zinc-600',
      light: 'text-zinc-500',
      lighter: 'text-zinc-400',
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 400,
    accent: 'bold',
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
  const { as, className, size, weight, accent, ...rest } = props;
  const Component = as || 'div';

  return (
    <Component
      className={cn(textVariants({ size, weight, accent, className }))}
      {...rest}
    />
  );
};
