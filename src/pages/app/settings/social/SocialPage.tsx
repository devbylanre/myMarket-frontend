import React from 'react';
import { Text } from '../../../../components/ui/Text';
import { SocialContainer } from '../../../../features/update/social/SocialContainer';
import { SettingsSection } from '../../../../components/templates/settings/SettingsSection';
import { SettingsHeader } from '../../../../components/templates/settings/SettingsHeader';

export const SocialPage = () => {
  return (
    <div className=''>
      <SettingsHeader
        title='Accounts'
        highlight='Add social links that will be displayed on your account as a way of
          reaching out to you'
      />
      <Text
        as='h5'
        size='2xl'
        weight={500}
      ></Text>
      <Text
        as='p'
        size='sm'
        accent='medium'
      ></Text>

      <SettingsSection>
        <div className='space-y-1'>
          <Text
            as='h6'
            weight={500}
          >
            Social links
          </Text>
          <Text
            as='h6'
            size='sm'
            accent='medium'
          >
            Add facebook, instagram, linkedIn, whatsapp url links to optimize
            your account
          </Text>
        </div>
        <SocialContainer />
      </SettingsSection>
    </div>
  );
};
