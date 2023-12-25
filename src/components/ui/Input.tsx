import { Field } from 'formik';
import React, { InputHTMLAttributes, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { FormContext } from './Form';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
}

export const Input = (props: IInput) => {
  const { className, disabled = false, ...rest } = props;
  const { name, handleTouched, value } = useContext(FormContext)!;

  return (
    <Field
      as='input'
      name={name}
      className={twMerge(
        'w-full font-medium transition-all duration-200 ease-in-out outline-none px-2 h-9 bg-inherit text-sm text-zinc-800 placeholder:font-normal flex-1 placeholder:text-zinc-500',
        disabled && 'bg-zinc-50 cursor-not-allowed text-zinc-500',
        className
      )}
      onFocus={() => handleTouched(true)}
      onBlur={() => handleTouched(false)}
      disabled={disabled}
      value={value}
      {...rest}
    />
  );
};
