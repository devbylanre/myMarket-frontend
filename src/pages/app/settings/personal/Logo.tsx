import React from 'react';

// components
import { Text } from '../../../../components/ui/Text';
import { Button } from '../../../../components/ui/Button';
import { Avatar, AvatarFallback } from '../../../../components/ui/Avatar';
import { SettingsSection } from '../../../../components/templates/SettingsSection';

export const Logo = () => {
  return (
    <SettingsSection>
      <div className='space-y-1'>
        <Text
          as='h6'
          weight={500}
        >
          Upload logo or Avatar
        </Text>
        <Text
          as='p'
          size='sm'
          accent='medium'
        >
          Upload an image of min 400x400px, PNG or JPEG formats less than 5MB.
        </Text>
      </div>
      <div className='inline-flex items-center gap-x-5'>
        <Avatar
          src='/assets/images/memoji-05.png'
          alt='user'
          className='w-12 h-12'
        >
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <Button
          size='xs'
          variant='outline'
        >
          Upload
        </Button>
      </div>
    </SettingsSection>
  );
};
