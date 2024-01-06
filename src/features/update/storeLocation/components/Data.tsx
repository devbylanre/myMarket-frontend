import React from 'react';
import { Text } from '../../../../components/ui/Text';

export const Data = ({ location }: { location: Record<string, any> }) => {
  return (
    <div className='flex gap-x-1'>
      {Object.values(location).every((v) => v !== '')
        ? Object.keys(location)
            .reverse()
            .map((key, i) => (
              <Text
                key={key}
                as='p'
                size='sm'
                className='capitalize'
              >
                {i + 1 < Object.keys(location).length
                  ? `${location[key]},`
                  : location[key]}
              </Text>
            ))
        : 'No location data available'}
    </div>
  );
};
