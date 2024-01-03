import React from 'react';
import { FormField, FormMessage } from '../../../../components/ui/Form';
import { Text } from '../../../../components/ui/Text';
import { Number } from '../../../../components/ui/Number';

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
          accent='light'
        >
          +234
        </Text>
      </Number>
      <FormMessage />
    </FormField>
  );
};
