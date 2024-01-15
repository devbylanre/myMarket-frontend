import React from 'react';
import { Form, Formik } from 'formik';
import { Checkbox } from '../../../components/Checkbox';
import { FormField, FormLabel } from '../../../components/Form';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';

export const CheckboxPage = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <PageHeadline subHeading='Checkbox field' />

      <PageTab>
        <Formik
          initialValues={{ agree: false }}
          onSubmit={() => {}}
        >
          <Form>
            <Example />
          </Form>
        </Formik>
      </PageTab>
    </div>
  );
};

const Example = () => {
  return (
    <FormField
      name='agree'
      className='flex items-center space-y-0 gap-x-4 w-96'
    >
      <FormLabel>Do you accept our Policy and Terms of service?</FormLabel>
      <Checkbox />
    </FormField>
  );
};
