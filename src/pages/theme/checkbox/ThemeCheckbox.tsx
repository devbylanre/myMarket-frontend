import React, { useState } from 'react';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import { Form, Formik } from 'formik';
import { Checkbox } from '../../../components/ui/Checkbox';
import { FormField } from '../../../components/ui/Form';

export const ThemeCheckbox = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <ThemeHeader>
        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          cupiditate consectetur obcaecati dignissimos ducimus nulla, quis
        </Text>
      </ThemeHeader>

      <FormCheckbox />
    </div>
  );
};

const FormCheckbox = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className='flex flex-col space-y-8'>
      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        <Formik
          initialValues={{ agree: false }}
          onSubmit={() => {}}
        >
          <Form>
            <FormField name='agree'>
              <Checkbox />
            </FormField>
          </Form>
        </Formik>
      </ThemeCard>
    </div>
  );
};
