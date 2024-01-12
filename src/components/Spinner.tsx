import React, { HTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils/util';

const spinnerVariants = cva(
  'w-5 h-5 border-2 rounded-full border-current animate-spin',
  {
    variants: {
      variant: {
        default: 'border-primary-500 border-t-transparent',
        dark: 'border-zinc-950 border-t-transparent',
        light: 'border-white border-t-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

export const Spinner = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, variant = 'default', ...rest } = props;
  return (
    <div
      ref={ref}
      className={cn(spinnerVariants({ variant, className }))}
      {...rest}
    />
  );
});
