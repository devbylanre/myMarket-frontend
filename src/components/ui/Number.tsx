import React, { HTMLAttributes, useContext } from 'react';
import { FormContext } from './Form';
import { Field } from 'formik';
import { twMerge } from 'tailwind-merge';

interface INumber extends HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
}

export const Number = ({
  className,
  placeholder,
  children,
  ...rest
}: INumber) => {
  const { name, helper } = useContext(FormContext)!;
  return (
    <div
      className={twMerge('inline-flex gap-x-2 leading-tight', className)}
      {...rest}
    >
      {children}
      <Field
        name={name}
        className={twMerge(
          'text-xl font-semibold text-inherit outline-none leading-none'
        )}
        onFocus={() => helper.setTouched(true)}
        onBlur={() => helper.setTouched(false)}
        placeholder={placeholder}
      />
    </div>
  );
};
