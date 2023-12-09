import React, { HTMLAttributes, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/util';

const badgeVariants = cva(
  'rounded-md px-2 h-6 text-xs font-medium inline-flex gap-x-2 items-center',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-secondary',
        secondary: 'bg-primary/30 text-secondary',
        dark: 'bg-secondary text-white',
        outline: 'border border-zinc-200 text-secondary shadow-sm',
        soft: 'bg-secondary/5 text-secondary shadow-sm',
        danger: 'bg-red-100 text-red-800',
        warning: 'bg-amber-100 text-amber-800',
        success: 'bg-emerald-100 text-emerald-800',
      },
    },
  }
);

interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (props: BadgeProps, ref) => {
    const { variant, className, ...rest } = props;

    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, className }))}
        {...rest}
      />
    );
  }
);
