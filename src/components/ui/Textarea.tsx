import React from 'react';
import { Field, useField } from 'formik';
import { twMerge } from 'tailwind-merge';

interface TextareaProps extends React.HtmlHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  className?: string;
  disabled?: boolean;
}

export const Textarea = ({
  name,
  disabled,
  className,
  ...rest
}: TextareaProps) => {
  const [, meta, helper] = useField(name);

  return (
    <Field
      as='textarea'
      className={twMerge(
        'outline-none p-2 rounded-md text-sm border border-zinc-200 transition-all duration-200 ease-in-out bg-white shadow shadow-secondary/5',
        disabled && 'cursor-not-allowed bg-zinc-50 bg-opacity-80',
        meta.touched && !meta.error && 'border-zinc-800',
        className
      )}
      name={name}
      onFocus={() => helper.setTouched(true)}
      onBlur={() => helper.setTouched(false)}
      disabled={disabled}
      {...rest}
    />
  );
};
