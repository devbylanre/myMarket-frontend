import React from 'react';
import { Text } from './Text';
import { twMerge } from 'tailwind-merge';

interface FormDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const FormDescription = ({
  children,
  className,
}: FormDescriptionProps) => {
  return (
    <Text
      as='p'
      size='xs'
      className={twMerge('text-zinc-500', className)}
    >
      {children}
    </Text>
  );
};
