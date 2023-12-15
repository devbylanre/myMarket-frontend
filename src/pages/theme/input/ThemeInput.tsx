import React, { useState } from 'react';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import { Input } from '../../../components/ui/Input';
import { Formik, Form } from 'formik';
import {
  FormField,
  FormControl,
  FormMessage,
  FormLabel,
} from '../../../components/ui/Form';

export const ThemeInput = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <ThemeHeader>
        <Text
          as='p'
          size='sm'
        >
          Displays a form input field or a component that looks like an input
          field.
        </Text>
      </ThemeHeader>

      <Formik
        initialValues={{ firstName: '', username: '' }}
        onSubmit={() => {}}
      >
        <Form className='flex flex-col gap-y-8'>
          <FormInput />
          <FormInputWithLabel />
        </Form>
      </Formik>
    </div>
  );
};

const FormInput = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className='flex flex-col gap-y-8'>
      <div>
        <Text
          as='h5'
          size='lg'
          weight={500}
        >
          Input
        </Text>
        <Text
          as='p'
          size='sm'
        >
          Showcase an input component
        </Text>
      </div>

      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        {tab === 'preview' ? (
          <FormField name='firstName'>
            <FormControl>
              <Input
                name='firstName'
                placeholder='Enter your first name'
                className='w-80'
              />
            </FormControl>
          </FormField>
        ) : (
          <Text as='p'>Coming soon</Text>
        )}
      </ThemeCard>
    </div>
  );
};

const FormInputWithLabel = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className='flex flex-col gap-y-8'>
      <div>
        <Text
          as='h5'
          size='lg'
          weight={500}
        >
          Input with label
        </Text>
        <Text
          as='p'
          size='sm'
        >
          Showcase an input component
        </Text>
      </div>

      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        {tab === 'preview' ? (
          <FormField name='username'>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input
                name='username'
                placeholder='myMarket'
                className='w-80'
              />
            </FormControl>
            <FormMessage>This is your public display name.</FormMessage>
          </FormField>
        ) : (
          <Text as='p'>Coming soon</Text>
        )}
      </ThemeCard>
    </div>
  );
};
