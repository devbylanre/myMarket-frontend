import React from 'react';
import { Item } from './Item';
import { Trigger } from './Trigger';
import { AccordionContent } from '../../../../components/ui/Accordion';
import { Text } from '../../../../components/ui/Text';
import { Badge } from '../../../../components/ui/Badge';
import {
  FormField,
  FormControl,
  FormLabel,
} from '../../../../components/ui/Form';
import { Input } from '../../../../components/ui/Input';

export const Price = () => {
  return (
    <Item value='pricing'>
      <Trigger
        value='pricing'
        title='Pricing'
      />
      <AccordionContent
        value='pricing'
        className='space-y-5'
      >
        <div className='inline-flex w-full gap-x-2'>
          {Array.from(['price', 'discount']).map((field) => (
            <FormField
              key={field}
              name={field}
            >
              <FormLabel className='capitalize'>{field}</FormLabel>
              <FormControl>
                <Input
                  placeholder={`Product ${field}`}
                  name={field}
                />
              </FormControl>
            </FormField>
          ))}
        </div>

        <div className='space-y-2'>
          <Text
            as='p'
            size='sm'
          >
            This is the price that will be displayed on your product, to remove
            discount input 0.
          </Text>

          <Text
            size='xl'
            weight={700}
            className='inline-flex items-end gap-x-2'
          >
            <span className='leading-none '>0.00 NGN</span>
            <Badge variant='success'>15% discount</Badge>
          </Text>
        </div>
      </AccordionContent>
    </Item>
  );
};
