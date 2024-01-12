import React from 'react';
import { FormField, FormMessage } from '../../../../components/Form';
import { Text } from '../../../../components/Text';
import { Number } from '../../../../components/Number';

export const Form = () => {
  return (
    <FormField
      name='number'
      className='w-fit'
    >
      <Number>
        <Text
          as='p'
          size='sm'
          className='ml-2 italic'
        >
          +234
        </Text>
      </Number>
      <FormMessage />
    </FormField>
  );
};
