import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useAuth } from './hooks/useAuth';
import { Component } from './components/Component';
import { Success } from './components/Success';
import { useNavigate } from 'react-router-dom';
import { FormErrorAlert } from '../../../components/templates/FormErrorAlert';

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

export const EmailAuthContainer = () => {
  const { resource, signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (values: InitialValueTypes) => {
    await signIn(values, () => {
      setTimeout(() => navigate('/app/'), 5000);
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className='space-y-5'>
        {resource.state === 'success' ? (
          <Success />
        ) : (
          <>
            <Component isLoading={resource.isLoading} />
            {resource.state === 'error' ? (
              <FormErrorAlert error={resource.error} />
            ) : null}
          </>
        )}
      </Form>
    </Formik>
  );
};
