import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { Text } from '../../../../components/Text';

interface SettingsHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  highlight: string;
}

export const SettingsHeader = ({
  className,
  title,
  highlight,
  ...rest
}: SettingsHeaderProps) => {
  return (
    <div
      className={twMerge('space-y-1', className)}
      {...rest}
    >
      <Text
        as='h5'
        size='lg'
        weight={500}
      >
        {title}
      </Text>

      <Text
        as='p'
        size='sm'
      >
        {highlight}
      </Text>
    </div>
  );
};
