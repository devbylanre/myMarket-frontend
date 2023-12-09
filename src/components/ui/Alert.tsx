import React, { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/util';

const alertVariants = cva('p-3 flex rounded-md shadow-sm', {
  variants: {
    variant: {
      default: 'bg-white border border-zinc-200',
      success: 'bg-emerald-100',
      warning: 'bg-amber-100',
      danger: 'bg-red-100',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  isVisible: boolean;
}

export const Alert = ({
  variant,
  isVisible,
  className,
  ...rest
}: AlertProps) => {
  return (
    <>
      {isVisible && (
        <div
          className={cn(alertVariants({ variant, className }))}
          {...rest}
        />
      )}
    </>
  );
};
