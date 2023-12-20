import React from 'react';
import { SettingsSection } from '../../../../components/templates/SettingsSection';
import { Text } from '../../../../components/ui/Text';
import { BillingContainer } from '../../../../features/update/billing/BillingContainer';

export const Billing = () => {
  return (
    <SettingsSection>
      <div className='space-y-1'>
        <Text
          as='h6'
          weight={500}
        >
          Billing
        </Text>
        <Text
          as='p'
          size='sm'
          accent='medium'
        >
          Provide an address you would always like to trade with sellers
        </Text>
      </div>
      <BillingContainer />
    </SettingsSection>
  );
};
