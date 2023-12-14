import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/util';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'px-2.5 font-medium rounded-md inline-flex items-center justify-center gap-x-1.5 transition-all duration-200 ease-in-out shadow-sm',
  {
    variants: {
      variant: {
        default: 'text-white bg-primary hover:bg-primary/80',
        secondary: 'text-primary bg-primary/10 hover:bg-primary/20',
        dark: 'bg-zinc-800 text-white hover:bg-zinc-800/90',
        outline:
          'border bg-white border-zinc-200 text-zinc-600 hover:text-zinc-800 hover:bg-zinc-50',
        soft: 'bg-zinc-100 hover:bg-secondary/10',
        success: 'bg-green-500 text-white hover:bg-green-600',
        warning: 'bg-amber-500 text-white hover:bg-amber-600',
        danger: 'bg-green-500 text-white hover:bg-red-600',
      },
      size: {
        xs: 'h-7 text-xs',
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
      variant: 'default',
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
    const { size, variant, className, ...rest } = props;
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...rest}
      />
    );
  }
);
