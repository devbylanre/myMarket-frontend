import React from 'react';
import { Link } from 'react-router-dom';

// icons
import { LuBellDot } from 'react-icons/lu';

// components
import { Text } from '../../../components/ui/Text';
import { Button } from '../../../components/ui/Button';
import { Alert, AlertContent, AlertIcon } from '../../../components/ui/Alert';

export const Error = ({ message }: { message: string }) => {
  return (
    <Alert variant='danger'>
      <AlertContent className='inline-flex items-center w-full gap-x-2'>
        <AlertIcon>
          <LuBellDot className='w-full h-full' />
        </AlertIcon>
        <Text
          as='p'
          size='sm'
          weight={500}
          className='flex-1'
        >
          {message}
        </Text>
        <Link to='/sign-up'>
          <Button
            variant='outline'
            size='xs'
          >
            Sign up
          </Button>
        </Link>
      </AlertContent>
    </Alert>
  );
};
