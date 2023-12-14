import React, { HTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface FormItemProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const FormItem = forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, ...rest }: FormItemProps, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge('flex flex-col gap-y-1.5 w-full', className)}
        {...rest}
      />
    );
  }
);
