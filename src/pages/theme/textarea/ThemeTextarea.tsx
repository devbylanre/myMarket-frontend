import React, { useState } from 'react';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import { Formik, Form } from 'formik';
import { Textarea, TextareaLimit } from '../../../components/ui/Textarea';
import {
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
} from '../../../components/ui/Form';

export const ThemeTextarea = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <ThemeHeader>
        <Text as='p'>Textarea field</Text>
      </ThemeHeader>

      <FormTextarea />
    </div>
  );
};

const FormTextarea = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  return (
    <div className='flex flex-col space-y-8'>
      <div>
        <Text
          as='h6'
          size='lg'
          weight={500}
        >
          Textarea
        </Text>
      </div>

      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        <Formik
          initialValues={{ bio: '' }}
          onSubmit={() => {}}
        >
          <Form>
            <FormField
              name='bio'
              className='w-96'
            >
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea />
              </FormControl>
              <div className='inline-flex justify-between'>
                <FormMessage>Displayed all across your profile</FormMessage>
                <TextareaLimit limit={250} />
              </div>
            </FormField>
          </Form>
        </Formik>
      </ThemeCard>
    </div>
  );
};
