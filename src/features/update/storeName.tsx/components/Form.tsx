import React from 'react';
import {
  FormControl,
  FormField,
  FormMessage,
} from '../../../../components/Form';
import { Input } from '../../../../components/Input';

export const Form = () => {
  return (
    <FormField
      className='w-full sm:w-fit'
      name='name'
    >
      <FormControl>
        <Input placeholder='e.Propati' />
      </FormControl>
      <FormMessage />
    </FormField>
  );
};
