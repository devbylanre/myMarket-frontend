import React from 'react';
import { Text } from '../../../components/ui/Text';
import { Input } from '../../../components/ui/Input';
import { FormItem } from '../../../components/ui/FormItem';
import { Label } from '../../../components/ui/Label';
import { Textarea } from '../../../components/ui/Textarea';
import { Checkbox } from '../../../components/ui/Checkbox';
import { Button } from '../../../components/ui/Button';
import { FormMessage } from '../../../components/ui/FormMessage';
import { FormControl } from '../../../components/ui/FormControl';
import { Link } from 'react-router-dom';

export const SignUpForm = () => {
  return (
    <div className='flex flex-col gap-y-8'>
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

      <Button variant='dark'>Join the marketplace</Button>
    </div>
  );
};

const Fields = () => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
      <FormItem>
        <Label name='firstName'>First name</Label>
        <FormControl name='firstName'>
          <Input
            name='firstName'
            placeholder='e.g John'
          />
        </FormControl>
        <FormMessage name='firstName' />
      </FormItem>
      <FormItem>
        <Label name='lastName'>Last name</Label>
        <FormControl name='lastName'>
          <Input
            name='lastName'
            placeholder='e.g Doe'
          />
        </FormControl>
        <FormMessage name='lastName' />
      </FormItem>
      <FormItem className='col-span-full'>
        <Label name='bio'>Bio</Label>
        <FormControl name='bio'>
          <Textarea
            name='bio'
            placeholder='Write a bio about yourself'
          />
        </FormControl>
        <FormMessage name='bio' />
      </FormItem>
      <FormItem>
        <Label name='email'>Email address</Label>
        <FormControl name='email'>
          <Input
            name='email'
            placeholder='team@business.com'
          />
        </FormControl>
        <FormMessage name='email' />
      </FormItem>
      <FormItem>
        <Label name='password'>Password</Label>
        <FormControl name='password'>
          <Input
            name='password'
            placeholder='Use a strong password'
          />
        </FormControl>
        <FormMessage name='password' />
      </FormItem>
      <FormItem className='flex-row items-center col-span-full gap-x-2'>
        <Checkbox name='accept' />
        <FormMessage name='accept'>
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
      </FormItem>
    </div>
  );
};
