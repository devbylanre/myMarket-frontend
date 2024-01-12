import React from 'react';
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '../../../../components/Form';
import { Input } from '../../../../components/Input';
import { Textarea } from '../../../../components/Textarea';

export const Details = () => {
  return (
    <div className='space-y-3 '>
      {/* title */}
      <FormField name='title'>
        <FormLabel>Title</FormLabel>
        <FormControl>
          <Input placeholder='Product title' />
        </FormControl>
        <FormMessage />
      </FormField>

      {/* tagline */}
      <FormField name='tagline'>
        <FormLabel>Tagline</FormLabel>
        <FormControl>
          <Textarea placeholder='Product tagline' />
        </FormControl>
        <FormMessage>
          Use keywords that can help boost your product SEO
        </FormMessage>
      </FormField>

      {/* description */}
      <FormField name='description'>
        <FormLabel>Description</FormLabel>
        <FormControl>
          <Textarea placeholder='Product description' />
        </FormControl>
        <FormMessage />
      </FormField>
    </div>
  );
};
