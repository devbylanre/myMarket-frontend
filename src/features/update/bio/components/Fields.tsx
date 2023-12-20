import React from 'react';
import {
  FormControl,
  FormField,
  FormMessage,
} from '../../../../components/ui/Form';
import { Textarea } from '../../../../components/ui/Textarea';

export const Fields = () => {
  return (
    <FormField name='bio'>
      <FormControl>
        <Textarea />
      </FormControl>
      <FormMessage />
    </FormField>
  );
};
