import React from 'react';
import { Text } from '../../../../components/ui/Text';

export const Data = ({ billing }: { billing: Record<string, string> }) => {
  return (
    <>
      {Object.keys(billing).map((key) => (
        <Text
          key={key}
          as='p'
          size='sm'
          accent='medium'
        >
          {billing[key] || `No billing ${billing[key]} data available`}
        </Text>
      ))}
    </>
  );
};
