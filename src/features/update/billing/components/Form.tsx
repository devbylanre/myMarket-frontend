import React from 'react';
import {
  FormControl,
  FormField,
  FormMessage,
} from '../../../../components/Form';
import { Input } from '../../../../components/Input';

interface IField {
  name: string;
  placeholder: string;
}

export const Form = () => {
  const fields: IField[] = [
    {
      name: 'country',
      placeholder: 'Country',
    },
    {
      name: 'state',
      placeholder: 'State e.g Oyo',
    },
    {
      name: 'city',
      placeholder: 'City e.g Ibadan',
    },
    {
      name: 'address',
      placeholder: 'e.g No.12 bashorun street, Mokola',
    },
  ];

  return (
    <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
      {fields.map((field) => (
        <FormField
          key={field.name}
          name={field.name}
        >
          <FormControl>
            <Input placeholder={field.placeholder} />
          </FormControl>
          <FormMessage />
        </FormField>
      ))}
    </div>
  );
};
