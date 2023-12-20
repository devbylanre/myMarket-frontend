import React from 'react';
import {
  FormControl,
  FormField,
  FormMessage,
} from '../../../../components/ui/Form';
import { Input } from '../../../../components/ui/Input';

export const FormFields = () => {
  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
      <FormField name='country'>
        <FormControl>
          <Input
            disabled
            placeholder='Country'
          />
        </FormControl>
        <FormMessage />
      </FormField>
      <FormField name='state'>
        <FormControl>
          <Input placeholder='State e.g Oyo' />
        </FormControl>
        <FormMessage />
      </FormField>
      <FormField name='city'>
        <FormControl>
          <Input placeholder='City e.g Ibadan' />
        </FormControl>
        <FormMessage />
      </FormField>
      <FormField name='address'>
        <FormControl>
          <Input placeholder='e.g No.12 bashorun street, Mokola' />
        </FormControl>
        <FormMessage />
      </FormField>
    </div>
  );
};
