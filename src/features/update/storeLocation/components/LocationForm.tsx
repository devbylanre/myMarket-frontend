import React from 'react';
import {
  FormControl,
  FormField,
  FormMessage,
} from '../../../../components/ui/Form';
import { Input } from '../../../../components/ui/Input';

export const LocationForm = () => {
  const fields: string[] = ['country', 'state', 'city', 'address'];

  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
      {fields.map((field, i) => (
        <FormField
          key={field}
          name={field}
        >
          <FormControl>
            <Input
              placeholder={`Provide your store ${field}`}
              disabled={i === 0 ? true : false}
            />
          </FormControl>
          <FormMessage />
        </FormField>
      ))}
    </div>
  );
};
