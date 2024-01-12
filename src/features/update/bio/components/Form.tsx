import React from 'react';
import {
  FormControl,
  FormField,
  FormMessage,
} from '../../../../components/Form';
import { Textarea } from '../../../../components/Textarea';

export const Form = () => {
  return (
    <FormField name='bio'>
      <FormControl>
        <Textarea />
      </FormControl>
      <FormMessage />
    </FormField>
  );
};
