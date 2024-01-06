import React from 'react';
import { Text } from '../../../../components/ui/Text';

export const Data = (props: Record<string, string>) => {
  return (
    <div className='flex gap-x-1'>
      {Object.keys(props).map((key: string, i) => (
        <Text
          key={key}
          as='p'
          size='sm'
          className='capitalize'
        >
          {props[key]}
        </Text>
      ))}
    </div>
  );
};
