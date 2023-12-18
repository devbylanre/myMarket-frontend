import React from 'react';
import { Text } from '../../../components/ui/Text';
import { Spinner } from '../../../components/ui/Spinner';

export const Success = () => {
  return (
    <>
      <Spinner variant='primary' />
      <div className='space-y-1'>
        <Text
          as='h5'
          size='2xl'
          weight={500}
        >
          Authentication Successful
        </Text>
        <Text
          as='p'
          size='sm'
        >
          We are redirecting you to your dashboard in 5s
        </Text>
      </div>
    </>
  );
};
