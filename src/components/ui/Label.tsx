import React from 'react';
import { Text } from './Text';
import { twMerge } from 'tailwind-merge';

type LabelProps = {
  children: React.ReactNode;
  className?: string;
  name: string;
};

export const Label = ({ children, className, name }: LabelProps) => {
  return (
    <Text
      as='label'
      className={twMerge('text-sm font-medium', className)}
      htmlFor={name}
    >
      {children}
    </Text>
  );
};
