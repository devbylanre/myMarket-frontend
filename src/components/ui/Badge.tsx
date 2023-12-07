import React from 'react';
import { twMerge } from 'tailwind-merge';

const badgeVariant = {
  initial:
    'rounded-md px-2 h-6 text-xs font-medium inline-flex gap-x-2 items-center',
  variant: {
    primary: 'bg-primary text-secondary',
    secondary: 'bg-primary/30 text-secondary',
    dark: 'bg-secondary text-primary',
    outline: 'border border-zinc-200 text-secondary',
    soft: 'bg-secondary/5 text-secondary',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-amber-100 text-amber-800',
    success: 'bg-green-100 text-green-800',
  },
};

type BadgeProps = {
  variant:
    | 'primary'
    | 'secondary'
    | 'dark'
    | 'outline'
    | 'soft'
    | 'danger'
    | 'success'
    | 'warning';
  className?: string;
} & React.ComponentPropsWithRef<'div'>;

export const Badge = (props: BadgeProps) => {
  const { variant = 'outline', className, ...rest } = props;

  return (
    <div
      className={twMerge(
        badgeVariant.initial,
        badgeVariant.variant[variant],
        className
      )}
      {...rest}
    />
  );
};
