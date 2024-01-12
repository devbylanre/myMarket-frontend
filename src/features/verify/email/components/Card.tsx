import React from 'react';
import { LuVote } from 'react-icons/lu';
import { Text } from '../../../../components/Text';

export const Card = () => {
  return (
    <>
      <LuVote className='w-8 h-8' />
      <div className='space-y-1 text-center'>
        <Text
          as='h5'
          size='2xl'
          weight={500}
        >
          Verify your email address
        </Text>
        <Text as='p'>
          Click on the button to verify your email address and proceed with the
          sign up process
        </Text>
      </div>
    </>
  );
};
