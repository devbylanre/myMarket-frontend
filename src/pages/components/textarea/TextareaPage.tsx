import React from 'react';
import { Formik, Form } from 'formik';
import { Textarea } from '../../../components/Textarea';
import { FormField, FormControl, FormLabel } from '../../../components/Form';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { Div } from '../../../components/Div';

export const TextareaPage = () => {
  return (
    <Div className='space-y-8'>
      <PageHeadline subHeading='Textarea component' />

      <Formik
        initialValues={{ bio: '' }}
        onSubmit={(values) => alert(`Your inputs are ${values.bio}`)}
      >
        <Form>
          <PageTab>
            <Example />
          </PageTab>
        </Form>
      </Formik>
    </Div>
  );
};

const Example = () => {
  return (
    <FormField
      name='bio'
      className='w-full sm:w-96'
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
