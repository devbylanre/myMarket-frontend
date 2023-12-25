import React from 'react';
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '../../../../components/ui/Form';
import { Input } from '../../../../components/ui/Input';

export const Pricing = () => {
  return (
    <div className='grid grid-cols-2 gap-x-3'>
      <FormField name='price'>
        <FormLabel>Price</FormLabel>
        <FormControl>
          <Input
            type='number'
            placeholder='Product price'
          />
        </FormControl>
        <FormMessage />
      </FormField>

      <FormField name='discount'>
        <FormLabel>Discount</FormLabel>
        <FormControl>
          <Input
            type='number'
            placeholder='Product discount'
          />
        </FormControl>
        <FormMessage />
      </FormField>
    </div>
  );
};
