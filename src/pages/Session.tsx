import React from 'react';
import { Alert, AlertContent, AlertIcon } from '../components/ui/Alert';
import { LuClock4 } from 'react-icons/lu';
import { Text } from '../components/ui/Text';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Session = () => {
  return (
    <Alert
      variant='warning'
      className='w-full px-3 mx-auto mt-8 sm:w-4/5 md:w-3/5 lg:w-2/5'
    >
      <AlertContent className='flex flex-col items-center border-0 shadow-none gap-y-5 ring-0'>
        <AlertIcon className='p-2'>
          <LuClock4 className='w-8 h-8' />
        </AlertIcon>
        <div className='space-y-1 text-center'>
          <Text
            as='h6'
            weight={500}
            size='2xl'
          >
            Your session has expired
          </Text>
          <Text
            as='p'
            size='sm'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            quis ratione? Ex aut placeat ipsa tempora optio, et corrupti
            facilis! Assumenda rem eius cumque impedit voluptatem sunt iste,
            fugiat quisquam!
          </Text>
        </div>
        <Link to='/auth/'>
          <Button variant='dark'>Sign in once again</Button>
        </Link>
      </AlertContent>
    </Alert>
  );
};
