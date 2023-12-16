import React from 'react';
import {
  UtilCard,
  UtilCardPreview,
  UtilContainer,
  UtilHeader,
  UtilTab,
} from '../Util';
import { Text } from '../../../components/ui/Text';
import { Formik, Form } from 'formik';
import { Textarea } from '../../../components/ui/Textarea';
import { FormField, FormControl, FormLabel } from '../../../components/ui/Form';

export const ThemeTextarea = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <UtilHeader>
        <Text as='p'>Textarea field</Text>
      </UtilHeader>

      <Formik
        initialValues={{ bio: '' }}
        onSubmit={(values) => alert(`Your inputs are ${values.bio}`)}
      >
        <Form>
          <Example />
        </Form>
      </Formik>
    </div>
  );
};

const Example = () => {
  return (
    <UtilContainer>
      <UtilTab />
      <UtilCard>
        <UtilCardPreview>
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
        </UtilCardPreview>
      </UtilCard>
    </UtilContainer>
  );
};
