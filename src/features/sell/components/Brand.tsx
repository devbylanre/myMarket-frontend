import React from 'react';
import categories from '../../../json/category.json';
import { Item } from './Item';
import { Trigger } from './Trigger';
import { AccordionContent } from '../../../components/ui/Accordion';
import { Input } from '../../../components/ui/Input';
import { FormField, FormControl, FormLabel } from '../../../components/ui/Form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/Select';
import { twMerge } from 'tailwind-merge';

export const Brand = () => {
  return (
    <Item value='brand'>
      <Trigger
        value='brand'
        title='Others'
      />
      <AccordionContent
        value='brand'
        className='grid grid-cols-1 gap-3 sm:grid-cols-2'
      >
        {Array.from(['brand', 'model']).map((field, i) => (
          <FormField
            name={field}
            key={i}
          >
            <FormLabel className='capitalize'>{field}</FormLabel>
            <FormControl>
              <Input
                name={field}
                placeholder={
                  i === 0 ? 'Product brand e.g Dell' : 'Product model'
                }
              />
            </FormControl>
          </FormField>
        ))}
        <Category />
      </AccordionContent>
    </Item>
  );
};

const Category = () => {
  return (
    <FormField
      name='category'
      className='col-span-full'
    >
      <Select>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder='Product category' />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {categories.map((category, i) => (
            <SelectItem
              key={i}
              value={category.name}
              className={(isActive) =>
                twMerge(
                  'h-8 flex items-center px-1.5 rounded text-sm cursor-pointer hover:bg-zinc-100',
                  isActive && 'bg-primary/10 text-primary font-medium'
                )
              }
            >
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  );
};
