import React from 'react';
import { cn } from '../../utils/util';

const ButtonVariants = {
  initial:
    'px-3 font-medium rounded-md inline-flex items-center gap-x-3 transition-all duration-200 ease-in-out shadow shadow-secondary/5',
  size: {
    xs: 'h-7 text-xs',
    sm: 'h-8 text-sm',
    md: 'h-9 text-sm',
    lg: 'h-10 text-base',
    xl: 'h-12 text-base',
  },
  variant: {
    primary: 'text-secondary bg-primary hover:bg-primary/70',
    secondary: 'text-secondary bg-primary/30 hover:bg-primary/50',
    dark: 'bg-secondary text-primary hover:bg-secondary/90',
    outline: 'border border-zinc-200 hover:bg-secondary/5',
    soft: 'bg-secondary/5 hover:bg-secondary/10',
    success: 'bg-green-300 text-secondary hover:bg-green-400',
    warning: 'bg-amber-300 text-secondary hover:bg-amber-400',
    danger: 'bg-red-300 text-secondary hover:bg-red-400',
  },
};

type ButtonProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?:
    | 'primary'
    | 'secondary'
    | 'dark'
    | 'outline'
    | 'soft'
    | 'danger'
    | 'success'
    | 'warning';
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<'button'>;

export const Button = (props: ButtonProps) => {
  const {
    size = 'sm',
    variant = 'primary',
    className,
    children,
    ...rest
  } = props;
  return (
    <button
      className={cn(
        ButtonVariants.initial,
        ButtonVariants.size[size],
        ButtonVariants.variant[variant],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
