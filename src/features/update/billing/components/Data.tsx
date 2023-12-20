import React from 'react';
import { Text } from '../../../../components/ui/Text';

export const Data = ({ billing }: { billing: Record<string, string> }) => {
  return (
    <>
      <Text
        as='p'
        size='sm'
        accent='medium'
      >
        Nigeria
      </Text>
      <Text
        as='p'
        size='sm'
        accent='medium'
      >
        {billing.state || 'No state data found'}
      </Text>
      <Text
        as='p'
        size='sm'
        accent='medium'
      >
        {billing.city || 'No city data found'}
      </Text>
      <Text
        as='p'
        size='sm'
        accent='medium'
      >
        {billing.address || 'No address data found'}
      </Text>
    </>
  );
};
