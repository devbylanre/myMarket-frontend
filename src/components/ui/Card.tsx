import React, { HTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Card = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div
      ref={ref}
      className={twMerge(
        'p-3 bg-white rounded-lg ring-1 ring-zinc-950/10 transition-all duration-200 ease-in-out w-full',
        className
      )}
      {...rest}
    />
  );
});

export const CardHeader = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={twMerge('w-full', className)}
      {...rest}
    />
  );
});

export const CardContent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={twMerge('w-full', className)}
      {...rest}
    />
  );
});

export const CardFooter = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div
      ref={ref}
      className={twMerge('w-full', className)}
      {...rest}
    />
  );
});
