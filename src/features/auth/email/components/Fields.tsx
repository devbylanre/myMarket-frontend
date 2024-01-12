import React, { useState } from 'react';
import { Input } from '../../../../components/Input';
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '../../../../components/Form';
import { LuEye, LuEyeOff } from 'react-icons/lu';

export const Fields = () => {
  const [passwordType, setPasswordType] = useState<'text' | 'password'>(
    'password'
  );

  const iconClassName =
    'self-center w-4 h-4 mr-2 cursor-pointer stroke-zinc-500 hover:stroke-zinc-950';

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
            type={passwordType}
          />
          {passwordType === 'password' ? (
            <LuEye
              className={iconClassName}
              onClick={() => setPasswordType('text')}
            />
          ) : (
            <LuEyeOff
              className={iconClassName}
              onClick={() => setPasswordType('password')}
            />
          )}
        </FormControl>
        <FormMessage />
      </FormField>
    </div>
  );
};
