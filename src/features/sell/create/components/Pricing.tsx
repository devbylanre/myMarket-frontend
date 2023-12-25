import React from 'react';
import {
  FormField,
  FormLabel,
  FormMessage,
} from '../../../../components/ui/Form';
import { Number } from '../../../../components/ui/Number';

export const Pricing = () => {
  return (
    <div className='grid grid-cols-2 gap-x-3'>
      <FormField name='price'>
        <FormLabel>Price</FormLabel>
        <Number>
          <span className='text-xs'>NGN</span>
        </Number>
        <FormMessage />
      </FormField>

      <FormField name='discount'>
        <FormLabel>Discount</FormLabel>
        <Number>
          <span className='text-xs font-bold'>%</span>
        </Number>
        <FormMessage />
      </FormField>
    </div>
  );
};
