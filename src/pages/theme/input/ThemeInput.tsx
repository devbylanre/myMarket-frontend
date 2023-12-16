import React from 'react';
import * as yup from 'yup';
import {
  UtilCard,
  UtilCardCode,
  UtilCardPreview,
  UtilContainer,
  UtilHeader,
  UtilTab,
} from '../Util';
import { Text } from '../../../components/ui/Text';
import { Input } from '../../../components/ui/Input';
import { Formik, Form } from 'formik';
import {
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
} from '../../../components/ui/Form';

export const ThemeInput = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <UtilHeader>
        <Text
          as='p'
          size='sm'
        >
          Displays a form input field or a component that looks like an input
          field.
        </Text>
      </UtilHeader>

      <Formik
        initialValues={{ firstName: '', username: '', address: '' }}
        validationSchema={yup.object().shape({
          address: yup.string().required('Provide your address'),
        })}
        onSubmit={() => {}}
      >
        <Form className='flex flex-col gap-y-8'>
          <Example />
        </Form>
      </Formik>
    </div>
  );
};

interface FieldProps {
  name: string;
  label: string | null;
  placeholder: string;
}

const fields: FieldProps[] = [
  {
    name: 'firstName',
    label: null,
    placeholder: 'Enter your first name',
  },
  {
    name: 'username',
    label: 'Username',
    placeholder: 'Enter your username',
  },
  {
    name: 'address',
    label: 'Address',
    placeholder: 'Provide your address',
  },
];

const Example = () => {
  return (
    <>
      {fields.map((field, i) => (
        <UtilContainer key={i}>
          <UtilTab />
          <UtilCard>
            <UtilCardPreview>
              <FormField
                name={field.name}
                className='w-full sm:w-80'
              >
                {field.label && <FormLabel>{field.label}</FormLabel>}
                <FormControl>
                  <Input
                    name={field.name}
                    placeholder={field.placeholder}
                    type='text'
                  />
                </FormControl>
                {i > 1 && <FormMessage />}
              </FormField>
            </UtilCardPreview>
            <UtilCardCode />
          </UtilCard>
        </UtilContainer>
      ))}
    </>
  );
};
