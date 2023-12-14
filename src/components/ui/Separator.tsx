import React, { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/util';

const separatorVariants = cva('bg-zinc-200', {
  variants: {
    orientation: {
      horizontal: 'w-full h-[1px] my-3',
      vertical: 'w-[1px] mx-3',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

interface SeparatorProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {}

export const Separator = ({ className, orientation }: SeparatorProps) => {
  return <div className={cn(separatorVariants({ orientation, className }))} />;
};
