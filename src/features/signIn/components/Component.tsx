import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../../components/ui/Text';
import { Fields } from './Fields';
import { Button } from '../../../components/ui/Button';
import { Spinner } from '../../../components/ui/Spinner';

export const Component = ({ isLoading }: { isLoading: boolean | null }) => {
  return (
    <>
      <div className='space-y-2'>
        <Text
          as='h5'
          size='3xl'
          weight={600}
        >
          Sign in to your account
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          maxime beatae accusamus, sint dolor.
        </Text>
      </div>

      <Fields />

      <Button
        variant='dark'
        type='submit'
        disabled={isLoading!}
        className='w-full'
      >
        {isLoading ? <Spinner variant='light' /> : 'Sign in'}
      </Button>

      <Text
        size='sm'
        as='p'
      >
        Don't have an account?{' '}
        <Link
          to='/sign-up'
          className='underline'
        >
          Sign up
        </Link>
      </Text>
    </>
  );
};
