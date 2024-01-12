import React from 'react';
import {
  FormControl,
  FormField,
  FormMessage,
} from '../../../../components/Form';
import { Input } from '../../../../components/Input';

export const EmailForm = () => {
  return (
    <div className='space-y-2'>
      {Array.from(['email', 'password']).map((field, i) => (
        <FormField
          key={i}
          name={field}
          className='w-full sm:w-3/5'
        >
          <FormControl>
            <Input
              type={field}
              placeholder={
                i > 0 ? 'Enter your password' : 'Enter a new email address'
              }
            />
          </FormControl>
          <FormMessage />
        </FormField>
      ))}
    </div>
  );
};
