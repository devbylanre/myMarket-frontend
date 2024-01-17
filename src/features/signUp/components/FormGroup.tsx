import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Div } from '../../../components/Div';
import { Input } from '../../../components/Input';
import { Textarea } from '../../../components/Textarea';
import { Icon } from '../../../components/Icon';
import { TbLock, TbLockOpen } from 'react-icons/tb';
import { Text } from '../../../components/Text';
import { Button } from '../../../components/Button';
import { Checkbox } from '../../../components/Checkbox';
import { Spinner } from '../../../components/Spinner';
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '../../../components/Form';

const fields = [
  { name: 'firstName', label: 'First name', placeholder: 'e.g John' },
  { name: 'lastName', label: 'Last name', placeholder: 'e.g Doe' },
];

const Names = () => {
  return (
    <>
      {fields.map((field) => (
        <FormField name={field.name}>
          <FormLabel>{field.label}</FormLabel>
          <FormControl>
            <Input
              name={field.name}
              placeholder={field.placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormField>
      ))}
    </>
  );
};

const Bio = () => {
  return (
    <FormField
      name='bio'
      className='col-span-full'
    >
      <FormLabel>Bio (Write your biography)</FormLabel>
      <FormControl>
        <Textarea
          name='bio'
          placeholder='e.g Ex software engineer at Facebook'
        />
      </FormControl>
      <FormMessage />
    </FormField>
  );
};

const Email = () => {
  return (
    <FormField name='email'>
      <FormLabel>Email address</FormLabel>
      <FormControl>
        <Input
          name='email'
          placeholder='e.g hello@business.com'
        />
      </FormControl>
      <FormMessage />
    </FormField>
  );
};

const Password = () => {
  const [isPassword, setIsPassword] = useState<boolean>(true);

  return (
    <FormField name='password'>
      <FormLabel>Password</FormLabel>
      <FormControl className='items-center'>
        <Input
          type={isPassword ? 'password' : 'text'}
          placeholder='Authorization key'
        />
        <Icon
          icon={isPassword ? TbLock : TbLockOpen}
          onClick={() => setIsPassword(!isPassword)}
          size={20}
          className='mr-2 cursor-pointer text-zinc-400 hover:text-zinc-950'
        />
      </FormControl>
    </FormField>
  );
};

const Agreement = () => {
  return (
    <FormField
      name='agree'
      className='flex items-center space-y-0 gap-x-2 col-span-full'
    >
      <Checkbox />
      <FormMessage>Do you agree to our Terms and Privacy policy</FormMessage>
    </FormField>
  );
};

export const FormGroup = ({ isLoading }: { isLoading: boolean | null }) => {
  return (
    <Div className='space-y-8'>
      <Div className='space-y-2'>
        <Text
          as='h3'
          size='2xl'
          weight={600}
        >
          Create an account
        </Text>
        <Text as='p'>
          Sign up with your credentials to start selling to buying products from
          other users MyMarket
        </Text>
      </Div>

      <Div
        layout='grid'
        className='grid-cols-1 gap-5 lg:grid-cols-2'
      >
        <Names />
        <Bio />
        <Email />
        <Password />
        <Agreement />
      </Div>

      <Button className='w-full'>
        {isLoading ? <Spinner /> : 'Create an account'}
      </Button>

      <Text
        as='p'
        size='sm'
      >
        Already have an account?{' '}
        <Link
          to='/auth'
          className='hover:underline'
        >
          Sign in
        </Link>
      </Text>
    </Div>
  );
};
