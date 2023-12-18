import React from 'react';
import { Text } from '../../../components/ui/Text';
import { Badge } from '../../../components/ui/Badge';

export const Success = ({ email }: { email: string }) => {
  return (
    <div className='space-y-2'>
      <Text
        as='h5'
        size='2xl'
        weight={600}
        className='text-primary'
      >
        Account registration successful
      </Text>
      <Text as='p'>
        An email was sent to your email{' '}
        <Badge className='h-6 text-sm'>{email}</Badge> along with an account
        activation link. Click on the link to verify your account
      </Text>
    </div>
  );
};
