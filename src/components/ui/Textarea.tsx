import React, { HTMLAttributes, forwardRef } from 'react';
import { Field, useField } from 'formik';
import { twMerge } from 'tailwind-merge';
import { Text } from './Text';

interface TextareaProps extends React.HtmlHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  className?: string;
  disabled?: boolean;
}

export const Textarea = forwardRef<HTMLDivElement, TextareaProps>(
  (props: TextareaProps, ref) => {
    const { name, disabled, className, ...rest } = props;
    const [, , helper] = useField(name);

    return (
      <Field
        ref={ref}
        as='textarea'
        className={twMerge(
          'outline-none p-2 rounded-md text-sm flex-1 bg-white placeholder:text-zinc-500 placeholder:font-light text-zinc-800 font-medium',
          disabled && 'cursor-not-allowed bg-zinc-50 bg-opacity-80',
          className
        )}
        name={name}
        onFocus={() => helper.setTouched(true)}
        onBlur={() => helper.setTouched(false)}
        disabled={disabled}
        {...rest}
      />
    );
  }
);

interface TextareaLimitProps extends HTMLAttributes<HTMLParagraphElement> {
  name: string;
  limit?: number;
}

export const TextareaLimit = ({
  name,
  className,
  limit,
  ...rest
}: TextareaLimitProps) => {
  const [, meta] = useField(name);

  return (
    <Text
      as='p'
      size='xs'
      className={twMerge('', className)}
      {...rest}
    >
      {limit &&
        limit &&
        limit >= meta.value?.length &&
        limit - meta.value?.length}{' '}
      remaining
    </Text>
  );
};
