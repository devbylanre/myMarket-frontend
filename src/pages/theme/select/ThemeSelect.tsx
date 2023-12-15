import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/Select';
import { FormItem } from '../../../components/ui/FormItem';
import { Label } from '../../../components/ui/Label';
import { LuCheck } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../../components/ui/Button';

export const ThemeSelect = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <ThemeHeader>
        <Text as='p'>Select</Text>
      </ThemeHeader>

      <Formik
        initialValues={{ sport: [], team: '' }}
        onSubmit={() => {}}
      >
        <Form className='flex flex-col gap-y-8'>
          <FormSelect />
          <FormMultipleSelect />
        </Form>
      </Formik>
    </div>
  );
};

const teams: string[] = [
  'Marketing',
  'Sales & Management',
  'Designers',
  'Human Resources',
  'System analysts',
];

const FormSelect = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className='flex flex-col space-y-8'>
      <div>
        <Text
          as='h5'
          size='lg'
          weight={500}
        >
          Select field
        </Text>
        <Text
          as='p'
          size='sm'
        >
          hey
        </Text>
      </div>

      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        <FormItem className='w-96'>
          <Label name='team'>Assign task</Label>
        </FormItem>
      </ThemeCard>
    </div>
  );
};

const options: string[] = [
  'soccer',
  'football',
  'basketball',
  'boxing',
  'hockey',
];

const FormMultipleSelect = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className='flex flex-col space-y-8'>
      <div>
        <Text
          as='h5'
          size='lg'
          weight={500}
        >
          Multiple select
        </Text>
        <Text
          as='p'
          size='sm'
        >
          hey
        </Text>
      </div>

      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        <FormItem className='w-96'>
          <Label name='sport'>Select a sport</Label>
          <Select name='sport'>
            <SelectTrigger>
              <SelectValue placeholder='Choose a Sport' />
            </SelectTrigger>
            <SelectContent>
              {options.map((option, i) => (
                <SelectItem
                  key={i}
                  value={option}
                  className={(isActive) => twMerge(isActive && 'bg-red-100')}
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      </ThemeCard>
    </div>
  );
};
