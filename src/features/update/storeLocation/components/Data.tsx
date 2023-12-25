import React from 'react';
import { Text } from '../../../../components/ui/Text';

export const Data = ({ location }: { location: Record<string, any> }) => {
  return (
    <div className='space-y-1'>
      {location
        ? Object.keys(location).map((key) => (
            <Text
              as='p'
              size='sm'
              accent='medium'
              key={key}
            >
              {location[key]}
            </Text>
          ))
        : 'No location data available'}
    </div>
  );
};
