import React from 'react';
import { cn } from '../lib/cn';
import { cva, VariantProps } from 'class-variance-authority';

const textVariants = cva('text-zinc-800', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-base md:text-[1.125rem] leading-[1.45]', // 18px
      xl: 'text-[1.125rem] md:text-[1.25rem] leading-[1.30]', // 20px
      '2xl': 'text-[1.25rem] md:text-[1.75rem] leading-[1.30]', // 28px
      '3xl': 'text-[2rem] md:text-[2.5rem] leading-[1.25]', //40px
      '4xl': 'text-[2rem] md:text-[3rem] leading-[1.25]', //48px
      '5xl': 'text-[2rem] md:text-[3.5rem] leading-[1.2]', // 56px
      '6xl': 'text-[2.5rem] md:text-[4rem] leading-[1.15]', //64px
      '7xl': 'text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[1.1]', //80px
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
    color: {
      black: 'text-black',
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 400,
    color: 'black',
  },
});

type TextProps<E extends React.ElementType> = {
  className?: string;
  as?: E;
};

type Props<E extends React.ElementType> = TextProps<E> &
  Omit<React.ComponentProps<E>, keyof TextProps<E>> &
  VariantProps<typeof textVariants>;

export const Text = <E extends React.ElementType = 'div'>(props: Props<E>) => {
  const { as, className, size, weight, color, ...rest } = props;

  const Component = as || 'div';

  return (
    <Component
      className={cn(textVariants({ size, weight, color, className }))}
      {...rest}
    />
  );
};
