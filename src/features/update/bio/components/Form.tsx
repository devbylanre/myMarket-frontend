import React from 'react';
import {
  FormControl,
  FormField,
  FormMessage,
} from '../../../../components/ui/Form';
import { Textarea } from '../../../../components/ui/Textarea';

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
