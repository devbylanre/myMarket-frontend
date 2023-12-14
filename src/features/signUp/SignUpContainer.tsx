import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { SignUpForm } from './components/SignUpForm';

interface InitialValuesTypes {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  password: string;
  accept: boolean;
}

const initialValues: InitialValuesTypes = {
  firstName: '',
  lastName: '',
  email: '',
  bio: '',
  password: '',
  accept: false,
};

const validationSchema = yup.object().shape({
  firstName: yup.string().required('What is your first name?'),
  lastName: yup.string().required('What is your last name?'),
  email: yup
    .string()
    .required('Provide your email address')
    .email('Provide a valid email address'),
  bio: yup
    .string()
    .required('Provide your bio?')
    .min(100, 'Minimum of 100 characters')
    .max(250, 'Maximum of 250 characters'),
  password: yup
    .string()
    .required('Provide your password')
    .min(8, 'Password must be at least 8 characters long'),
  accept: yup
    .boolean()
    .required('Accept our terms')
    .oneOf([true], 'To sign up, you must agree to our Terms of service.'),
});

export const SignUpContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {(formik) => (
        <Form>
          <SignUpForm />
        </Form>
      )}
    </Formik>
  );
};
