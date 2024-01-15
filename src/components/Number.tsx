import React, { HTMLAttributes, forwardRef, useContext } from 'react';
import { FormContext } from './Form';
import { Field } from 'formik';
import { twMerge } from 'tailwind-merge';

interface Props extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
}

export const Number = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, placeholder, children, ...rest } = props;
  const {
    field: { name },
    helper: { setTouched },
  } = useContext(FormContext)!;

  return (
    <div
      ref={ref}
      className={twMerge('flex gap-x-2 w-fit leading-tight', className)}
      {...rest}
    >
      {children}
      <Field
        name={name}
        className={twMerge(
          'text-xl font-semibold text-inherit outline-none leading-none flex-auto w-48'
        )}
        onFocus={() => setTouched(true)}
        onBlur={() => setTouched(false)}
        placeholder={placeholder}
      />
    </div>
  );
});
