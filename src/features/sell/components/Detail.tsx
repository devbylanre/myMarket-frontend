import React from 'react';
import { AccordionContent } from '../../../components/ui/Accordion';
import { FormItem } from '../../../components/ui/FormItem';
import { FormControl } from '../../../components/ui/FormControl';
import { Input } from '../../../components/ui/Input';
import { Textarea } from '../../../components/ui/Textarea';
import { Label } from '../../../components/ui/Label';
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
        <FormItem>
          <Label name='title'>Title</Label>
          <FormControl name='title'>
            <Input
              placeholder='Product title'
              name='title'
            />
          </FormControl>
        </FormItem>
        <FormItem>
          <Label name='tagline'>Tagline</Label>
          <FormControl name='tagline'>
            <Textarea
              placeholder='Short tagline e.g Apple macBook pro M3 space gray'
              name='tagline'
            />
          </FormControl>
        </FormItem>
      </AccordionContent>
    </Item>
  );
};
