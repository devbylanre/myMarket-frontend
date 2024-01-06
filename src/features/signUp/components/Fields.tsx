import React, { useState } from 'react';
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
import { LuEye, LuEyeOff } from 'react-icons/lu';

export const Fields = () => {
  return (
    <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
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
      <Password />
      <FormField
        name='accept'
        className='flex space-y-0 col-span-full gap-x-2'
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

const Password = () => {
  const [type, setType] = useState<'text' | 'password'>('password');

  const iconClassName: string =
    'w-4 h-4 text-zinc-500 hover:text-zinc-950 ml-2 self-center cursor-pointer';

  return (
    <FormField name='password'>
      <FormLabel>Password</FormLabel>
      <FormControl>
        {type === 'text' ? (
          <LuEyeOff
            className={iconClassName}
            onClick={() => setType('password')}
          />
        ) : (
          <LuEye
            className={iconClassName}
            onClick={() => setType('text')}
          />
        )}
        <Input
          type={type}
          placeholder='Use a strong password'
        />
      </FormControl>
      <FormMessage />
    </FormField>
  );
};
