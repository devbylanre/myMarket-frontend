import React from 'react';
import { AccordionContent } from '../../../../components/ui/Accordion';
import {
  FormField,
  FormControl,
  FormLabel,
} from '../../../../components/ui/Form';
import { Input } from '../../../../components/ui/Input';
import { Textarea } from '../../../../components/ui/Textarea';
import { Trigger } from './Trigger';
import { Item } from './Item';

export const Detail = () => {
  return (
    <Item value='detail'>
      <Trigger
        value='detail'
        title='Title & Tagline'
      />
      <AccordionContent
        className='space-y-3'
        value='detail'
      >
        <FormField name='title'>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input
              placeholder='Product title'
              name='title'
            />
          </FormControl>
        </FormField>
        <FormField name='tagline'>
          <FormLabel>Tagline</FormLabel>
          <FormControl>
            <Textarea
              name='tagline'
              placeholder='Short tagline e.g Apple macBook pro M3 space gray'
            />
          </FormControl>
        </FormField>
      </AccordionContent>
    </Item>
  );
};
