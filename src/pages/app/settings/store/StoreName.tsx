import React from 'react';
import { SettingsSection } from '../shared/SettingsSection';
import { Text } from '../../../../components/Text';
import { StoreNameContainer } from '../../../../features/update/storeName.tsx/StoreNameContainer';

export const StoreName = () => {
  return (
    <SettingsSection>
      <div className='space-y-1'>
        <Text
          as='h6'
          size='sm'
          weight={500}
        >
          Store name
        </Text>
        <Text
          as='p'
          size='sm'
        >
          The name displayed to users as your store name
        </Text>
      </div>

      <StoreNameContainer />
    </SettingsSection>
  );
};
