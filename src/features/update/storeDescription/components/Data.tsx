import React from 'react';
import { Text } from '../../../../components/ui/Text';

export const Data = ({ description }: { description: string }) => {
  return (
    <Text
      as='p'
      size='sm'
      accent='medium'
    >
      {description}
    </Text>
  );
};
