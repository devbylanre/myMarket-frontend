import React from 'react';
import { Text } from '../../../components/ui/Text';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { Button } from '../../../components/ui/Button';
import { SettingsSection } from '../../../components/templates/SettingsSection';
import { SettingsHeader } from '../../../components/templates/SettingsHeader';

export const PersonalPage = () => {
  return (
    <>
      <SettingsHeader
        title='Personal Settings'
        highlight='Customize and edit essential user settings data'
      ></SettingsHeader>
      <EditLogo />
    </>
  );
};

const EditLogo = () => {
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
          accent='light'
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
