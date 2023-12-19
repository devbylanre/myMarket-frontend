import React, { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/util';

const separatorVariants = cva('', {
  variants: {
    orientation: {
      horizontal: 'w-full my-3 border-t border-t-zinc-200',
      vertical: 'w-fit border-l border-l-zinc-200 mx-3',
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
