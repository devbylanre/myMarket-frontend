import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/util';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'px-2 rounded-lg inline-flex items-center justify-center gap-x-2 transition-all duration-200 ease-in-out ring-1',
  {
    variants: {
      variant: {
        ghost: 'ring-0 bg-none shadow-none text-zinc-600 hover:text-zinc-950',
        solid:
          'bg-primary-500 hover:bg-primary-400 text-white ring-primary ring-primary-600',
        outline:
          'ring-zinc-950/10 bg-white text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50',
        danger: 'bg-red-600 text-white hover:bg-red-500 ring-red-950/10',
      },
      size: {
        xs: 'h-7 text-sm',
        sm: 'h-8 text-sm',
        md: 'h-9 text-sm',
        lg: 'h-10 text-base',
        xl: 'h-11 text-base',
        icon: 'w-6 h-6 p-1',
        'icon-lg': 'w-8 h-8 p-1',
        'icon-xl': 'w-10 h-10 p-1',
      },
    },
    defaultVariants: {
      size: 'sm',
      variant: 'solid',
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
