import React from 'react';
import { Text } from '../../../components/ui/Text';
import { Input } from '../../../components/ui/Input';
import { Textarea } from '../../../components/ui/Textarea';
import { Checkbox } from '../../../components/ui/Checkbox';
import {
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
} from '../../../components/ui/Form';
import { Link } from 'react-router-dom';

export const SignUpForm = () => {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum labore,
          eaque exercitationem laboriosam doloremque
        </Text>
      </div>
      <Fields />
    </>
  );
};

const Fields = () => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
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
