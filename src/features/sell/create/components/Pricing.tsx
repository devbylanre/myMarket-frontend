import React from 'react';
import { FormField, FormLabel, FormMessage } from '../../../../components/Form';
import { Number } from '../../../../components/Number';
import { Text } from '../../../../components/Text';

export const Pricing = ({ price }: { price: number }) => {
  return (
    <>
      <div className='flex flex-col justify-between gap-3 sm:flex-row'>
        <FormField
          name='price'
          className='w-full'
        >
          <FormLabel>Price</FormLabel>
          <Number>
            <span className='text-xs'>NGN</span>
          </Number>
          <FormMessage />
        </FormField>

        <FormField
          name='discount'
          className='w-full'
        >
          <FormLabel>Discount</FormLabel>
          <Number>
            <span className='text-xs font-bold'>%</span>
          </Number>
          <FormMessage />
        </FormField>
      </div>
      <Text
        size='xs'
        weight={500}
        className='mt-4'
      >
        Based on price and discount value, your product will be sold for NGN
        {price.toFixed(2) || 0}
      </Text>
    </>
  );
};
