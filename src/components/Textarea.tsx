import React, { HTMLAttributes, forwardRef, useContext } from 'react';
import { Field } from 'formik';
import { twMerge } from 'tailwind-merge';
import { FormContext } from './Form';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { disabled, className, ...rest } = props;

    const {
      field: { name },
      helper,
    } = useContext(FormContext)!;

    return (
      <Field
        ref={ref}
        as='textarea'
        name={name}
        className={twMerge(
          'outline-none p-2 rounded-md text-sm flex-1 bg-white placeholder:text-zinc-500 placeholder:font-normal text-zinc-800 font-medium',
          disabled && 'cursor-not-allowed bg-zinc-50 bg-opacity-80',
          className
        )}
        onFocus={() => helper.setTouched(true)}
        onBlur={() => helper.setTouched(false)}
        disabled={disabled}
        {...rest}
      />
    );
  }
);

interface TextareaLimitProps extends HTMLAttributes<HTMLParagraphElement> {
  limit: number;
}

export const TextareaLimit = forwardRef<
  HTMLParagraphElement,
  TextareaLimitProps
>((props, ref) => {
  const { className, limit, ...rest } = props;
  const {
    field: { value },
  } = useContext(FormContext)!;

  return (
    <p
      ref={ref}
      className={twMerge('text-zinc-500 text-sm', className)}
      {...rest}
    >
      {limit >= value?.length && `${limit} - ${value?.length}`} remaining
    </p>
  );
});
