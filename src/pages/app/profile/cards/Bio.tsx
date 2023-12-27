import React from 'react';
import { Text } from '../../../../components/ui/Text';

export const Bio = ({ bio }: { bio: string }) => {
  return (
    <div className='space-y-1'>
      <Text
        as='h6'
        size='sm'
        weight={500}
      >
        Bio
      </Text>
      <Text
        as='p'
        size='sm'
      >
        {bio || 'No Bio information provided'}
      </Text>
    </div>
  );
};
