import React from 'react';
import { Text } from '../../../components/ui/Text';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '../../../components/ui/Form';

export const SignInForm = () => {
  return (
    <div className='flex flex-col gap-y-8'>
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

      <Button variant='dark'>Sign in</Button>

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
    </div>
  );
};

const Fields = () => {
  return (
    <div className='space-y-3'>
      <FormField name='email'>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input
            name='email'
            placeholder='Enter your email address'
          />
        </FormControl>
        <FormMessage />
      </FormField>

      <FormField name='password'>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input
            name='password'
            placeholder='Enter your account password'
          />
        </FormControl>
        <FormMessage />
      </FormField>
    </div>
  );
};
