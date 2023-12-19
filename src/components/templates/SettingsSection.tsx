import React, { HTMLAttributes } from 'react';
import { Separator } from '../ui/Separator';
import { twMerge } from 'tailwind-merge';

interface SettingsSectionProps extends HTMLAttributes<HTMLDivElement> {}

export const SettingsSection = ({
  className,
  ...rest
}: SettingsSectionProps) => {
  return (
    <>
      <Separator className='my-5' />
      <div
        className={twMerge(
          'grid grid-cols-1 gap-5 lg:gap-8 lg:grid-cols-2',
          className
        )}
        {...rest}
      />
    </>
  );
};
