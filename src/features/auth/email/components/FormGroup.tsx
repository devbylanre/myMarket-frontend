import React, { useState } from 'react';
import { Div } from '../../../../components/Div';
import { Input } from '../../../../components/Input';
import { Icon } from '../../../../components/Icon';
import { TbEyeClosed, TbEye } from 'react-icons/tb';
import {
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from '../../../../components/Form';
import { Text } from '../../../../components/Text';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/Button';
import { Spinner } from '../../../../components/Spinner';

const PasswordField = () => {
  const [isPassword, setIsPassword] = useState<boolean>(true);

  return (
    <FormField name='password'>
      <FormLabel>Password</FormLabel>
      <FormControl className='flex items-center'>
        <Input
          name='password'
          placeholder='Enter your account password'
          type={isPassword ? 'password' : 'text'}
        />
        <Icon
          icon={isPassword ? TbEye : TbEyeClosed}
          size={20}
          className='mr-2 cursor-pointer text-zinc-400 hover:text-zinc-950'
          onClick={() => setIsPassword(!isPassword)}
        />
      </FormControl>
      <FormMessage />
    </FormField>
  );
};

export const FormGroup = ({ isLoading }: { isLoading: boolean | null }) => {
  return (
    <Div className='space-y-5'>
      <Div className='space-y-2'>
        <Text
          as='h5'
          size='2xl'
          weight={600}
        >
          Log into your account
        </Text>
        <Text
          as='p'
          size='sm'
        >
          Welcome back, log into your account to continue trading on your
          account
        </Text>
      </Div>

      <Div className='space-y-4'>
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

        <PasswordField />
      </Div>

      <Button className='w-full'>
        {isLoading ? <Spinner /> : 'Authenticate now'}
      </Button>

      <Div
        layout='flex'
        className='items-center gap-x-2'
      >
        <Text
          as='a'
          size='sm'
        >
          Don't have an account yet
        </Text>
        <Link to='/'>
          <Button
            type='button'
            variant='outline'
            size='xs'
          >
            Sign up
          </Button>
        </Link>
      </Div>
    </Div>
  );
};
