import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { Text } from '../ui/Text';
import { LuCornerUpLeft } from 'react-icons/lu';
import { Button } from '../ui/Button';

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
        'w-full bg-white/80 px-1 backdrop-blur-sm sticky top-0 pt-4 flex gap-x-8 justify-between items-center'
      )}
      {...rest}
    >
      <div className=''>
        <Text
          as='h5'
          size='lg'
          weight={600}
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
      <Button
        size='sm'
        variant='outline'
      >
        <LuCornerUpLeft className='w-4 h-4' />
        Go to Dashboard
      </Button>
    </div>
  );
};
