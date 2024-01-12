import React from 'react';
import {
  FormControl,
  FormField,
  FormMessage,
} from '../../../../components/Form';
import { Input } from '../../../../components/Input';

export const Form = () => {
  return (
    <div className='flex flex-wrap gap-3'>
      <FormField name='firstName'>
        <FormControl>
          <Input />
        </FormControl>
        <FormMessage />
      </FormField>
      <FormField name='lastName'>
        <FormControl>
          <Input />
        </FormControl>
        <FormMessage />
      </FormField>
    </div>
  );
};
