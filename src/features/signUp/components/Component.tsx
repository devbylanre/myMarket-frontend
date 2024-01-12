import React from 'react';
// components
import { Spinner } from '../../../components/Spinner';
import { Button } from '../../../components/Button';
import { Text } from '../../../components/Text';
import { Fields } from './Fields';
import { Link } from 'react-router-dom';

export const Component = ({ isLoading }: { isLoading: boolean | null }) => {
  return (
    <>
      <div className='flex flex-col gap-y-2'>
        <Text
          as='h4'
          weight={600}
          size='3xl'
        >
          Join the community and sell your products
        </Text>
        <Text as='p'>
          Create a new account by completing the form and trading with nigerians
          in minutes
        </Text>
      </div>

      <Fields />

      <Button
        type='submit'
        className='w-full'
        disabled={isLoading!}
      >
        {isLoading ? <Spinner variant='light' /> : 'Join the marketplace'}
      </Button>

      <Links />
    </>
  );
};

const Links = () => {
  return (
    <Text size='sm'>
      Already have an account
      <Link
        to='/auth'
        className='ml-1 font-medium transition-all duration-300 ease-in-out text-primary-500 hover:text-primary-800'
      >
        Sign in
      </Link>
    </Text>
  );
};
