import React, { HTMLAttributes, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/util';

const badgeVariants = cva(
  'rounded-md px-1.5 h-5 w-fit text-xs ring-1 font-medium inline-flex gap-x-1 items-center shadow-sm',
  {
    variants: {
      variant: {
        primary: 'bg-primary/80 text-white ring-1-primary',
        secondary: 'bg-primary/10 text-primary ring-1 ring-primary/10',
        dark: 'bg-zinc-800 text-white',
        outline: 'ring-zinc-950/10 text-zinc-800',
        soft: 'bg-zinc-100 text-zinc-800 shadow-sm ring-zinc-950/10',
        danger: 'bg-red-100 text-red-800 ring-red-950/10',
        warning: 'bg-amber-100 text-amber-800 ring-amber-950/10',
        success: 'bg-green-100 text-green-800 ring-green-950/10',
      },
    },
  }
);

interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (props: BadgeProps, ref) => {
    const { variant = 'secondary', className, ...rest } = props;

    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, className }))}
        {...rest}
      />
    );
  }
);
