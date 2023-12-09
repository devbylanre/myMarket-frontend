import React, { useState } from 'react';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import { Formik, Form } from 'formik';
import { FormItem } from '../../../components/ui/FormItem';
import { Label } from '../../../components/ui/Label';
import { Textarea, TextareaLimit } from '../../../components/ui/Textarea';
import { FormDescription } from '../../../components/ui/FormDescription';

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
            <FormItem className='w-96'>
              <Label name='bio'>Bio</Label>
              <Textarea name='bio' />
              <div className='inline-flex justify-between'>
                <FormDescription>
                  Displayed all across your profile
                </FormDescription>
                <TextareaLimit
                  limit={250}
                  name='bio'
                />
              </div>
            </FormItem>
          </Form>
        </Formik>
      </ThemeCard>
    </div>
  );
};
