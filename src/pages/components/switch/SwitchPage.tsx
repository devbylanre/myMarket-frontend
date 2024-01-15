import React from 'react';
import { Formik, Form } from 'formik';
import { Switch } from '../../../components/Switch';
import { FormField, FormLabel } from '../../../components/Form';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';

export const SwitchPage = () => {
  return (
    <div className='space-y-8'>
      <PageHeadline subHeading='Switch components' />

      <PageTab>
        <Formik
          initialValues={{ comments: false }}
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
      name='comment'
      className='flex w-full space-y-0 sm:w-96 gap-x-4'
    >
      <FormLabel>Allow others to comment on your Posts</FormLabel>
      <Switch />
    </FormField>
  );
};
