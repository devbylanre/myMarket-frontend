import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { SignInForm } from './components/SignInForm';

interface InitialValueTypes {
  email: string;
  password: string;
}

const initialValues: InitialValueTypes = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Provide your email address')
    .email('Only accept valid email address'),
  password: yup
    .string()
    .required('Provide your password')
    .min(8, 'Password must be at least 8 characters in length'),
});

export const SignInContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      <Form>
        <SignInForm />
      </Form>
    </Formik>
  );
};
