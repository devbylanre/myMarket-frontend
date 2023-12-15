import React, { useState } from 'react';
import { UtilHeader } from '../Util';
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
      <UtilHeader>
        <Text
          as='p'
          size='sm'
        >
          Displays a form input field or a component that looks like an input
          field.
        </Text>
      </UtilHeader>

      <Formik
        initialValues={{ firstName: '', username: '' }}
        onSubmit={() => {}}
      >
        <Form className='flex flex-col gap-y-8'></Form>
      </Formik>
    </div>
  );
};

const FormInput = () => {
  return;
};

const FormInputWithLabel = () => {
  return;
};
