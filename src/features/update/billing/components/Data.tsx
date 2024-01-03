import React from 'react';
import { Text } from '../../../../components/ui/Text';

export const Data = ({ billing }: { billing: Record<string, string> }) => {
  return (
    <Text
      as='span'
      size='sm'
      className='flex capitalize'
    >
      {Object.values(billing)
        .map((key, i) => key)
        .join(', ')}
    </Text>
  );
};
