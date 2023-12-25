import React from 'react';
import { SettingsSection } from '../../../../components/templates/settings/SettingsSection';
import { Text } from '../../../../components/ui/Text';
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
          accent='medium'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus quia voluptatum non reiciendis corrupti voluptas
        </Text>
      </div>
      <EmailContainer />
    </SettingsSection>
  );
};
