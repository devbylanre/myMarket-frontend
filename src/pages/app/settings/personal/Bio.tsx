import React from 'react';
import { SettingsSection } from '../../../../components/templates/SettingsSection';
import { Text } from '../../../../components/ui/Text';
import { BioContainer } from '../../../../features/update/bio/BioContainer';

export const Bio = () => {
  return (
    <SettingsSection>
      <div className='space-y-1'>
        <Text
          as='h6'
          weight={500}
        >
          Biography
        </Text>
        <Text
          as='p'
          size='sm'
          accent='medium'
        >
          Document a short description about yourself and what you do
        </Text>
      </div>
      <BioContainer />
    </SettingsSection>
  );
};
