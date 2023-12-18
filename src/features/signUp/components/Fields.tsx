import React from 'react';
import { Link } from 'react-router-dom';

// components
import { Input } from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';
import { Textarea } from '../../../components/ui/Textarea';
import {
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from '../../../components/ui/Form';

export const Fields = () => {
  return (
    <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
      <FormField name='firstName'>
        <FormLabel>First name</FormLabel>
        <FormControl>
          <Input
            name='firstName'
            placeholder='e.g John'
          />
        </FormControl>
        <FormMessage />
      </FormField>
      <FormField name='lastName'>
        <FormLabel>Last name</FormLabel>
        <FormControl>
          <Input
            name='lastName'
            placeholder='e.g Doe'
          />
        </FormControl>
        <FormMessage />
      </FormField>
      <FormField
        name='bio'
        className='col-span-full'
      >
        <FormLabel>Bio</FormLabel>
        <FormControl>
          <Textarea
            name='bio'
            placeholder='Write a bio about yourself'
          />
        </FormControl>
        <FormMessage />
      </FormField>
      <FormField name='email'>
        <FormLabel>Email address</FormLabel>
        <FormControl>
          <Input
            name='email'
            placeholder='team@business.com'
          />
        </FormControl>
        <FormMessage />
      </FormField>
      <FormField name='password'>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input
            name='password'
            placeholder='Use a strong password'
          />
        </FormControl>
        <FormMessage />
      </FormField>
      <FormField
        name='accept'
        className='flex items-center space-y-0 col-span-full gap-x-2'
      >
        <Checkbox />
        <FormMessage className='leading-tight'>
          Do you agree to our{' '}
          <Link
            to='/sign-up'
            className='underline text-zinc-800'
          >
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link
            to='/sign-up'
            className='underline text-zinc-800'
          >
            Terms of Service
          </Link>
        </FormMessage>
      </FormField>
    </div>
  );
};
