import React from 'react';
import { Text } from './Text';
import { twMerge } from 'tailwind-merge';

interface LabelProps {
  children: React.ReactNode;
  className?: string;
  name: string;
}

export const Label = ({ className, name, ...rest }: LabelProps) => {
  return (
    <Text
      as='label'
      weight={400}
      size='sm'
      className={twMerge('text-zinc-500', className)}
      htmlFor={name}
      {...rest}
    />
  );
};
