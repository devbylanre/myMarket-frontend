import { useField, Field } from 'formik';
import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
  disabled?: boolean;
}

export const Input = (props: InputProps) => {
  const { className, name, disabled, ...rest } = props;
  const [, meta, helper] = useField(name);

  const onFocus = () => helper.setTouched(true);
  const onBlur = () => helper.setTouched(false);

  return (
    <Field
      name={name}
      className={twMerge(
        'w-full rounded-md border font-medium transition-all duration-200 ease-in-out border-zinc-200 outline-none px-2 h-9 shadow shadow-secondary/5 bg-white text-sm placeholder:font-normal placeholder:text-zinc-500',
        disabled && 'bg-opacity-80 bg-zinc-50 cursor-not-allowed',
        meta.touched && !meta.error && 'border-zinc-800',
        meta.error && 'border-red-500',
        className
      )}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      {...rest}
    />
  );
};
