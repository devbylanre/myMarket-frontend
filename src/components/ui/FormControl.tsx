import { useField } from 'formik';
import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface FormControlProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}

export const FormControl = ({ className, name, ...rest }: FormControlProps) => {
  const [, meta] = useField(name);

  return (
    <div
      className={twMerge(
        'rounded-md ring-1 w-full ring-zinc-950/10 h-fit shadow-sm flex transition-all duration-200 ease-in-out overflow-clip bg-white',
        meta.touched && !meta.error && 'ring-zinc-800',
        meta.touched && meta.error && 'ring-red-500',
        className
      )}
      {...rest}
    />
  );
};
