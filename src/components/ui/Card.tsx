import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = ({ className, ...rest }: CardProps) => {
  return (
    <div
      className={twMerge(
        'p-3 bg-white rounded-lg ring-1 ring-zinc-950/10 transition-all duration-200 ease-in-out w-full',
        className
      )}
      {...rest}
    />
  );
};

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const CardHeader = ({ className, ...rest }: CardHeaderProps) => {
  return (
    <div
      className={twMerge('w-full', className)}
      {...rest}
    />
  );
};

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}
export const CardContent = ({ className, ...rest }: CardContentProps) => {
  return (
    <div
      className={twMerge('w-full', className)}
      {...rest}
    />
  );
};

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}
export const CardFooter = ({ className, ...rest }: CardFooterProps) => {
  return (
    <div
      className={twMerge('flex w-full', className)}
      {...rest}
    />
  );
};
