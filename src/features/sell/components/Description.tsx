import React from 'react';
import { Item } from './Item';
import { Trigger } from './Trigger';
import { AccordionContent } from '../../../components/ui/Accordion';
import { FormItem } from '../../../components/ui/FormItem';
import { Label } from '../../../components/ui/Label';
import { FormControl } from '../../../components/ui/FormControl';
import { Textarea } from '../../../components/ui/Textarea';

export const Description = () => {
  return (
    <Item value='description'>
      <Trigger
        value='description'
        title='Description'
      />
      <AccordionContent value='description'>
        <FormItem>
          <Label name='description'>Description</Label>
          <FormControl name='description'>
            <Textarea
              name='description'
              placeholder='Product description'
            />
          </FormControl>
        </FormItem>
      </AccordionContent>
    </Item>
  );
};
