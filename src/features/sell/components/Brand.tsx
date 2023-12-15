import React from 'react';
import categories from '../../../json/category.json';
import { Item } from './Item';
import { Trigger } from './Trigger';
import { AccordionContent } from '../../../components/ui/Accordion';
import { FormItem } from '../../../components/ui/FormItem';
import { Label } from '../../../components/ui/Label';
import { FormControl } from '../../../components/ui/FormControl';
import { Input } from '../../../components/ui/Input';
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
          <FormItem key={i}>
            <Label
              name={field}
              className='capitalize'
            >
              {field}
            </Label>
            <FormControl name={field}>
              <Input
                name={field}
                placeholder={
                  i === 0 ? 'Product brand e.g Dell' : 'Product model'
                }
              />
            </FormControl>
          </FormItem>
        ))}
        <Category />
      </AccordionContent>
    </Item>
  );
};

const Category = () => {
  return (
    <Select
      name='category'
      className='col-span-full'
    >
      <SelectTrigger>
        <SelectValue placeholder='Product category' />
      </SelectTrigger>
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
  );
};
