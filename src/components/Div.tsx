import { VariantProps, cva } from 'class-variance-authority';
import React, { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../lib/cn';

const divVariants = cva('', {
  variants: {
    layout: {
      grid: 'grid',
      flex: 'flex',
      block: 'block',
      'inline-flex': 'inline-flex',
      'inline-block': 'inline-block',
      hidden: 'hidden',
    },
  },

  defaultVariants: {
    layout: 'block',
  },
});

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof divVariants> {}

export const Div = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { layout, className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={cn(divVariants({ layout, className }))}
      {...rest}
    />
  );
});
