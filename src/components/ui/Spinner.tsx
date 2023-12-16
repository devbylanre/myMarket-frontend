import React from 'react';
import { MotionProps, motion } from 'framer-motion';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../utils/util';

const spinnerVariants = cva('w-5 h-5 border-2 rounded-full border-current', {
  variants: {
    variant: {
      default: 'border-zinc-500 border-t-transparent',
      primary: 'border-primary border-t-transparent',
      secondary: 'border-primary/50 border-t-transparent',
      dark: 'border-zinc-950 border-t-transparent',
      light: 'border-white border-t-transparent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface SpinnerProps
  extends MotionProps,
    VariantProps<typeof spinnerVariants> {
  className?: string;
  variant: 'default' | 'primary' | 'secondary' | 'dark';
}

export const Spinner = ({
  className,
  variant = 'default',
  ...rest
}: SpinnerProps) => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: 'linear', duration: 0.3 }}
      className={cn(spinnerVariants({ variant, className }))}
      {...rest}
    />
  );
};
