import React from 'react';
import { Text } from '../../../../components/Text';

export const Data = ({ billing }: { billing: Record<string, string> }) => {
  return (
    <div className='flex gap-x-1'>
      {Object.values(billing).every((v) => v !== '') ? (
        Object.keys(billing)
          .reverse()
          .map((key, i) => (
            <Text
              key={key}
              as='p'
              size='sm'
              className='capitalize'
            >
              {i + 1 < Object.keys(billing).length
                ? `${billing[key]},`
                : billing[key]}
            </Text>
          ))
      ) : (
        <Text
          as='p'
          size='sm'
        >
          No billing information available
        </Text>
      )}
    </div>
  );
};
