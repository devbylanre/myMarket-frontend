import React from 'react';
import {
  FormControl,
  FormField,
  FormMessage,
} from '../../../../components/ui/Form';
import { Input } from '../../../../components/ui/Input';

export const NameForm = () => {
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
