import React from 'react';
import { Text } from '../../../../../components/Text';
import { Separator } from '../../../../../components/Separator';

export const Bio = ({ bio }: { bio: string }) => {
  return (
    <>
      <Separator className='my-5' />
      <div className='px-3 space-y-1 lg:px-5'>
        <Text
          as='h6'
          size='sm'
          weight={600}
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
    </>
  );
};
