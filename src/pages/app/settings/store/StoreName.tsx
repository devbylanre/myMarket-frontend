import React from 'react';
import { SettingsSection } from '../../../../components/templates/settings/SettingsSection';
import { Text } from '../../../../components/ui/Text';
import { StoreNameContainer } from '../../../../features/update/storeName.tsx/StoreNameContainer';

export const StoreName = () => {
  return (
    <SettingsSection>
      <div className='space-y-1'>
        <Text
          as='h6'
          weight={500}
        >
          Store name
        </Text>
        <Text
          as='p'
          size='sm'
          accent='medium'
        >
          The name displayed to users as your store name
        </Text>
      </div>

      <StoreNameContainer />
    </SettingsSection>
  );
};
