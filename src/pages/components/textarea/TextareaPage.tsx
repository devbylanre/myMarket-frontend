import React from 'react';
import { Formik, Form } from 'formik';
import { Textarea } from '../../../components/ui/Textarea';
import { FormField, FormControl, FormLabel } from '../../../components/ui/Form';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { TabContent } from '../../../components/ui/Tab';

export const TextareaPage = () => {
  return (
    <div className='space-y-8'>
      <PageHeadline subHeading='Textarea component' />

      <PageTab>
        <TabContent value='preview'>
          <Formik
            initialValues={{ bio: '' }}
            onSubmit={(values) => alert(`Your inputs are ${values.bio}`)}
          >
            <Form>
              <Example />
            </Form>
          </Formik>
        </TabContent>
      </PageTab>
    </div>
  );
};

const Example = () => {
  return (
    <div>
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
    </div>
  );
};
