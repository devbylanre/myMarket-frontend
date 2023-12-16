import React from 'react';
import {
  UtilCard,
  UtilCardCode,
  UtilCardPreview,
  UtilContainer,
  UtilHeader,
  UtilTab,
} from '../Util';
import { Text } from '../../../components/ui/Text';
import { Form, Formik } from 'formik';
import { Checkbox } from '../../../components/ui/Checkbox';
import { FormField, FormLabel } from '../../../components/ui/Form';

export const ThemeCheckbox = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <UtilHeader>
        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          cupiditate consectetur obcaecati dignissimos ducimus nulla, quis
        </Text>
      </UtilHeader>

      <Formik
        initialValues={{ agree: false }}
        onSubmit={() => {}}
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
            name='agree'
            className='inline-flex items-center justify-between space-y-0 w-96'
          >
            <FormLabel>
              Do you accept our Privacy policy and Terms of service?
            </FormLabel>
            <Checkbox />
          </FormField>
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};
