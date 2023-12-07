import React from 'react';
import { twMerge } from 'tailwind-merge';

type FormItemProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithRef<'div'>;

export const FormItem = ({ children, className, ...rest }: FormItemProps) => {
  return (
    <div
      className={twMerge('flex flex-col space-y-1.5 text-xs', className)}
      {...rest}
    >
      {children}
    </div>
  );
};
