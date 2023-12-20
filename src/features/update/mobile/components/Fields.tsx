import React from 'react';
import { FormControl, FormField } from '../../../../components/ui/Form';
import { Input } from '../../../../components/ui/Input';
import { Text } from '../../../../components/ui/Text';

export const Fields = () => {
  return (
    <FormField
      name='number'
      className='w-fit'
    >
      <FormControl className='items-center'>
        <Text
          as='p'
          size='sm'
          className='ml-2 italic'
          accent='light'
        >
          +234
        </Text>
        <Input type='number' />
      </FormControl>
    </FormField>
  );
};
