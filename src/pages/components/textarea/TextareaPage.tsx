import React from 'react';
import { Formik, Form } from 'formik';
import { Textarea } from '../../../components/Textarea';
import { FormField, FormControl, FormLabel } from '../../../components/Form';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';

export const TextareaPage = () => {
  return (
    <div className='space-y-8'>
      <PageHeadline subHeading='Textarea component' />

      <PageTab>
        <Formik
          initialValues={{ bio: '' }}
          onSubmit={(values) => alert(`Your inputs are ${values.bio}`)}
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
      name='bio'
      className='w-96'
    >
      <FormLabel>Bio</FormLabel>
      <FormControl>
        <Textarea
          name='bio'
          placeholder='Write a bio'
        />
      </FormControl>
    </FormField>
  );
};
