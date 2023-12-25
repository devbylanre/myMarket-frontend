import React from 'react';
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '../../../../components/ui/Form';
import { Input } from '../../../../components/ui/Input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/Select';
import category from '../../../../json/category.json';
import { twMerge } from 'tailwind-merge';

export const BrandAndCategory = () => {
  return (
    <div className='space-y-3'>
      <FormField name='brand'>
        <FormLabel>Brand</FormLabel>
        <FormControl>
          <Input placeholder='Product manufacturer e.g Apple' />
        </FormControl>
        <FormMessage />
      </FormField>
      <FormField name='model'>
        <FormLabel>Model</FormLabel>
        <FormControl>
          <Input placeholder='Product model e.g iPad Pro 8th Gen' />
        </FormControl>
        <FormMessage />
      </FormField>

      {/* product category */}
      <Category />
    </div>
  );
};

const Category = () => {
  return (
    <FormField name='category'>
      <FormLabel>Category</FormLabel>
      <Select>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder='Select a category' />
          </SelectTrigger>
        </FormControl>

        <SelectContent>
          {category.map((category, i) => (
            <SelectItem
              key={i}
              value={category.name}
              className={(isActive) =>
                twMerge(
                  'text-zinc-500 py-1.5 hover:bg-zinc-50 px-2 text-sm rounded-lg',
                  isActive && 'bg-primary/10 text-primary hover:bg-none'
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
