import React from 'react';
import { Text } from './Text';
import { twMerge } from 'tailwind-merge';
import { useField } from 'formik';

interface FormDescriptionProps {
  name: string;
  children?: React.ReactNode;
  className?: string;
}

export const FormMessage = ({
  name,
  children,
  className,
}: FormDescriptionProps) => {
  const [, meta] = useField(name);

  return (
    <Text
      as='p'
      size='sm'
      className={twMerge(
        'text-zinc-500',
        meta.error && meta.touched && 'text-red-600',
        className
      )}
    >
      {meta.error && meta.touched ? meta.error : children}
    </Text>
  );
};
