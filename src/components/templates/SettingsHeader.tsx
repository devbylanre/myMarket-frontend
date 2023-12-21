import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { Text } from '../ui/Text';

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
      className={twMerge(
        'w-full bg-white/80 space-y-1 backdrop-blur-sm sticky top-0 pt-4 text-center'
      )}
      {...rest}
    >
      <Text
        as='h5'
        size='xl'
        weight={500}
      >
        {title}
      </Text>

      <Text
        as='p'
        size='sm'
        accent='light'
      >
        {highlight}
      </Text>
    </div>
  );
};
