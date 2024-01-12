import React from 'react';
import { Form, Formik } from 'formik';
import { Checkbox } from '../../../components/Checkbox';
import { FormField, FormLabel } from '../../../components/Form';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { TabContent } from '../../../components/Tab';

export const CheckboxPage = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <PageHeadline subHeading='Checkbox field' />

      <PageTab>
        <TabContent value='preview'>
          <Formik
            initialValues={{ agree: false }}
            onSubmit={() => {}}
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
        name='agree'
        className='inline-flex items-center justify-between space-y-0 w-96'
      >
        <FormLabel>Do you accept our Policy and Terms of service?</FormLabel>
        <Checkbox />
      </FormField>
    </div>
  );
};
