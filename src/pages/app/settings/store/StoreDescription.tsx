import React from 'react';
import { SettingsSection } from '../shared/SettingsSection';
import { Text } from '../../../../components/ui/Text';
import { StoreDescriptionContainer } from '../../../../features/update/storeDescription/StoreDescriptionContainer';

export const StoreDescription = () => {
  return (
    <SettingsSection>
      <div className='space-y-1'>
        <Text
          as='h6'
          size='sm'
          weight={500}
        >
          Store description
        </Text>
        <Text
          as='p'
          size='sm'
          accent='medium'
        >
          Tell other users about your store and the products you offer
        </Text>
      </div>
      <StoreDescriptionContainer />
    </SettingsSection>
  );
};
