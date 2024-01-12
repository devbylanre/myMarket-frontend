import React from 'react';
import {
  FormControl,
  FormField,
  FormMessage,
} from '../../../../components/Form';
import { Textarea } from '../../../../components/Textarea';

export const Form = () => {
  return (
    <FormField
      name='description'
      className='w-full md:w-4/5'
    >
      <FormControl>
        <Textarea placeholder='e.g we sell foreign used gadgets' />
      </FormControl>
      <FormMessage />
    </FormField>
  );
};
