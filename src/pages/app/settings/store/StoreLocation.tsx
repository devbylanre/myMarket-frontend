import React from 'react';
import { SettingsSection } from '../shared/SettingsSection';
import { Text } from '../../../../components/Text';
import { StoreLocationContainer } from '../../../../features/update/storeLocation/StoreLocationContainer';

export const StoreLocation = () => {
  return (
    <SettingsSection>
      <div className='space-y-1'>
        <Text
          as='h6'
          size='sm'
          weight={500}
        >
          Store location
        </Text>
        <Text
          as='p'
          size='sm'
        >
          Where is your store located
        </Text>
      </div>
      <StoreLocationContainer />
    </SettingsSection>
  );
};
