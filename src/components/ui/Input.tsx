import { Field } from 'formik';
import React, { InputHTMLAttributes, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { FormContext } from './Form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
}

export const Input = (props: InputProps) => {
  const { className, name, disabled = false, ...rest } = props;
  const { handleTouched } = useContext(FormContext)!;

  return (
    <Field
      name={name}
      className={twMerge(
        'w-full font-medium transition-all duration-200 ease-in-out outline-none px-2 h-9 bg-inherit text-sm text-zinc-800 placeholder:font-normal flex-1 placeholder:text-zinc-500',
        disabled && 'bg-zinc-50 cursor-not-allowed text-zinc-500',
        className
      )}
      onFocus={() => handleTouched(true)}
      onBlur={() => handleTouched(false)}
      disabled={disabled}
      {...rest}
    />
  );
};
