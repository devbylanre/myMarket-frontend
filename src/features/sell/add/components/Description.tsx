import React from 'react';
import { Item } from './Item';
import { Trigger } from './Trigger';
import { AccordionContent } from '../../../../components/ui/Accordion';
import {
  FormField,
  FormControl,
  FormLabel,
} from '../../../../components/ui/Form';
import { Textarea } from '../../../../components/ui/Textarea';

export const Description = () => {
  return (
    <Item value='description'>
      <Trigger
        value='description'
        title='Description'
      />
      <AccordionContent value='description'>
        <FormField name='description'>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea
              name='description'
              placeholder='Product description'
            />
          </FormControl>
        </FormField>
      </AccordionContent>
    </Item>
  );
};
