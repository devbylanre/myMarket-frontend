import React from 'react';
import { Formik, Form } from 'formik';
import { Switch } from '../../../components/ui/Switch';
import { FormField, FormLabel } from '../../../components/ui/Form';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { TabContent } from '../../../components/ui/Tab';

export const SwitchPage = () => {
  return (
    <div className='space-y-8'>
      <PageHeadline subHeading='Switch components' />

      <PageTab>
        <TabContent value='preview'>
          <Formik
            initialValues={{ comments: false }}
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
        name='comment'
        className='inline-flex justify-between w-full space-y-0 sm:w-96'
      >
        <FormLabel>Allow others to comment on your Posts</FormLabel>
        <Switch />
      </FormField>
    </div>
  );
};
