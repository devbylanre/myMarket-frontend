import React from 'react';
import { SettingsSection } from '../../../../components/templates/SettingsSection';
import { Text } from '../../../../components/ui/Text';
import { NameContainer } from '../../../../features/update/name/nameContainer';

export const Name = () => {
  return (
    <SettingsSection>
      <div className='space-y-1'>
        <Text
          as='h6'
          weight={500}
        >
          Legal Names
        </Text>
        <Text
          as='p'
          size='sm'
          accent='medium'
        >
          Change your respective names shown on your profile
        </Text>
      </div>
      <NameContainer />
    </SettingsSection>
  );
};
