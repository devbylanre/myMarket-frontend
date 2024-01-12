import React from 'react';
import { SettingsSection } from '../shared/SettingsSection';
import { Text } from '../../../../components/Text';
import { EmailContainer } from '../../../../features/change/email/EmailContainer';

export const Email = () => {
  return (
    <SettingsSection>
      <div className='space-y-1'>
        <Text
          as='h6'
          size='sm'
          weight={500}
        >
          Change email
        </Text>
        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus quia voluptatum non reiciendis corrupti voluptas
        </Text>
      </div>
      <EmailContainer />
    </SettingsSection>
  );
};
