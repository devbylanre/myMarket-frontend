import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/util';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'px-3 rounded-md inline-flex items-center justify-center gap-x-1.5 transition-all duration-200 ease-in-out ring-1 shadow shadow-zinc-100',
  {
    variants: {
      variant: {
        default: 'ring-0 bg-none shadow-none',
        primary:
          'bg-primary hover:bg-primary/90 text-white ring-primary ring-primary',
        secondary:
          'text-primary bg-primary/10 hover:bg-primary/20 ring-primary/20',
        dark: 'bg-zinc-800 text-white hover:bg-zinc-800/90 ring-zinc-950',
        outline:
          'ring-zinc-950/10 bg-white text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50',
        soft: 'bg-zinc-50 hover:bg-zinc-100 ring-zinc-950/10',
        success: 'bg-green-600 text-white hover:bg-green-500 ring-green-950/10',
        warning: 'bg-amber-500 text-white hover:bg-amber-400 ring-amber-950/10',
        danger: 'bg-red-600 text-white hover:bg-red-500 ring-red-950/10',
      },
      size: {
        xs: 'h-7 text-sm',
        sm: 'h-8 text-sm',
        md: 'h-9 text-sm',
        lg: 'h-10 text-base',
        xl: 'h-12 text-base',
        icon: 'w-6 h-6 p-1',
        'icon-lg': 'w-8 h-8 p-1',
        'icon-xl': 'w-10 h-10 p-1',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'primary',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const { size, variant, className, disabled, ...rest } = props;
    return (
      <button
        ref={ref}
        className={cn(
          disabled && 'opacity-50 hover:bg-opacity-0',
          buttonVariants({ variant, size, className })
        )}
        {...rest}
      />
    );
  }
);
