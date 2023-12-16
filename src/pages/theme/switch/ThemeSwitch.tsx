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
import { Formik, Form } from 'formik';
import { Switch } from '../../../components/ui/Switch';
import { FormField, FormLabel } from '../../../components/ui/Form';

export const ThemeSwitch = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <UtilHeader>
        <Text as='p'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          deleniti voluptas aliquam quas, quos ab, delectus numquam esse ratione
          sed eum! Culpa voluptatum vel, saepe rerum enim iusto ad facere?
        </Text>
      </UtilHeader>

      <Formik
        initialValues={{ comments: false }}
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
            name='comment'
            className='inline-flex justify-between w-full space-y-0 sm:w-96'
          >
            <FormLabel>Allow others to comment on your Posts</FormLabel>
            <Switch />
          </FormField>
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};
