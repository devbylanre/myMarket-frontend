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
  const [, , helper] = useField(name);

  const onFocus = () => helper.setTouched(true);
  const onBlur = () => helper.setTouched(false);

  return (
    <Field
      name={name}
      className={twMerge(
        'w-full font-medium transition-all duration-200 ease-in-out outline-none px-2 h-9 bg-inherit text-sm text-zinc-800 placeholder:font-light flex-1 placeholder:text-zinc-500',
        disabled && 'bg-zinc-50 cursor-not-allowed text-zinc-500',
        className
      )}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      {...rest}
    />
  );
};
