import React from 'react';
import * as yup from 'yup';
import { Input } from '../../../components/Input';
import { Formik, Form } from 'formik';
import {
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
} from '../../../components/Form';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { Div } from '../../../components/Div';

export const InputPage = () => {
  return (
    <Div className='space-y-12'>
      <PageHeadline subHeading='Input component' />

      <Formik
        initialValues={{ firstName: '', username: '', address: '' }}
        validationSchema={yup.object().shape({
          address: yup.string().required('Provide your address'),
        })}
        onSubmit={() => {}}
      >
        <Form className='space-y-3'>
          <Examples />
        </Form>
      </Formik>
    </Div>
  );
};

interface FieldProps {
  name: string;
  label: string | null;
  placeholder: string;
}

const fields: FieldProps[] = [
  {
    name: 'firstName',
    label: null,
    placeholder: 'Enter your first name',
  },
  {
    name: 'username',
    label: 'Username - Label',
    placeholder: 'Enter your username',
  },
  {
    name: 'address',
    label: 'Address - With form error',
    placeholder: 'Provide your address',
  },
];

const Examples = () => {
  return (
    <>
      {fields.map((field, i) => (
        <PageTab key={i}>
          <FormField
            name={field.name}
            className='w-full sm:w-80'
          >
            {field.label && <FormLabel>{field.label}</FormLabel>}
            <FormControl>
              <Input
                name={field.name}
                placeholder={field.placeholder}
                type='text'
              />
            </FormControl>
            {i > 1 && <FormMessage />}
          </FormField>
        </PageTab>
      ))}
    </>
  );
};
