import { Field } from 'formik';
import React, { InputHTMLAttributes, forwardRef, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { FormContext } from './Form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, disabled = false, ...rest } = props;
  const {
    field: { name },
    helper: { setTouched },
  } = useContext(FormContext)!;

  return (
    <Field
      ref={ref}
      as='input'
      name={name}
      className={twMerge(
        'w-full font-medium transition-all duration-200 ease-in-out outline-none px-2 h-9 bg-inherit text-sm text-zinc-800 placeholder:font-normal flex-1 placeholder:text-zinc-500',
        disabled && 'bg-zinc-50 cursor-not-allowed text-zinc-500',
        className
      )}
      onFocus={() => setTouched(true)}
      onBlur={() => setTouched(false)}
      disabled={disabled}
      {...rest}
    />
  );
});
