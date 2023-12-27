import React from 'react';
import { SettingsSection } from '../../../../components/templates/settings/SettingsSection';
import { Text } from '../../../../components/ui/Text';
import { MobileContainer } from '../../../../features/update/mobile/MobileContainer';

export const Mobile = () => {
  return (
    <SettingsSection>
      <div className='space-y-1'>
        <Text
          as='h6'
          size='sm'
          weight={500}
        >
          Mobile number
        </Text>
        <Text
          as='p'
          size='sm'
          accent='medium'
        >
          A medium to which members of our platform can reach out to you
        </Text>
      </div>
      <MobileContainer />
    </SettingsSection>
  );
};
