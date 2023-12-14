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
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  useSelect,
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
  const [selectCategory, categoryExists, value] = useSelect('category');
  return (
    <Select className='col-span-full'>
      <SelectTrigger name='category'>
        <SelectValue placeholder='Product category'>{value}</SelectValue>
      </SelectTrigger>
      <SelectGroup name='category'>
        {categories.map((category, i) => (
          <SelectItem
            key={i}
            onSelect={() => selectCategory(category.name)}
            className={twMerge(
              'h-8 flex items-center px-1.5 rounded text-sm cursor-pointer hover:bg-zinc-100',
              categoryExists(category.name) &&
                'bg-primary/10 text-primary font-medium'
            )}
          >
            {category.name || null}
          </SelectItem>
        ))}
      </SelectGroup>
    </Select>
  );
};
