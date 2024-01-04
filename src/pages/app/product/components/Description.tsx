import React from 'react';
import { Text } from '../../../../components/ui/Text';

interface DescriptionProps {
  description: string;
}

export const Description = ({ description }: DescriptionProps) => {
  return (
    <Text
      as='p'
      size='sm'
    >
      {description}
    </Text>
  );
};
