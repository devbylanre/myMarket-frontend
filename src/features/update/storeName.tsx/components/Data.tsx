import React from 'react';
import { Text } from '../../../../components/ui/Text';

export const Data = ({ name }: { name: string }) => {
  return (
    <Text
      as='p'
      size='sm'
      className='capitalize'
    >
      {name}
    </Text>
  );
};
