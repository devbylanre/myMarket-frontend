import React from 'react';
import { Link } from 'react-router-dom';

// components
import { Button } from '../../../components/ui/Button';
import { Text } from '../../../components/ui/Text';

export const Success = () => {
  return (
    <div className='flex flex-col gap-y-5'>
      <div className='space-y-1'>
        <Text
          as='h5'
          size='2xl'
          weight={500}
        >
          Account verification successful
        </Text>
        <Text
          as='p'
          size='sm'
        >
          You are now a verified member, continue to sign in to log into your
          account explore the community
        </Text>
      </div>

      <Link to='/auth'>
        <Button size='sm'>Continue to Sign in</Button>
      </Link>
    </div>
  );
};
