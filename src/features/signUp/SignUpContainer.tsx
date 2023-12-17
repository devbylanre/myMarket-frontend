import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { SignUpForm } from './components/SignUpForm';
import { useSignUp } from '../../hooks/user/useSignUp';
import { Button } from '../../components/ui/Button';
import { Spinner } from '../../components/ui/Spinner';
import { Alert, AlertContent } from '../../components/ui/Alert';
import { LuBadgeAlert } from 'react-icons/lu';
import { Text } from '../../components/ui/Text';
import { SuccessAlert } from './components/SuccessAlert';

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
    .min(8, 'At least 8 characters long'),
  accept: yup
    .boolean()
    .required('Accept our terms')
    .oneOf([true], 'To sign up, you must agree to our Terms of service.'),
});

export const SignUpContainer = () => {
  const { resource, signUp } = useSignUp();

  const handleSubmit = async (values: InitialValuesTypes) => {
    await signUp({ isSeller: false, ...values });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form className='space-y-8'>
          {resource.state === 'success' ? (
            <SuccessAlert email={formik.values.email} />
          ) : (
            <>
              <SignUpForm />
              <Button
                variant='dark'
                type='submit'
                className='w-full'
                disabled={resource.isLoading}
              >
                {resource.isLoading ? (
                  <Spinner variant='light' />
                ) : (
                  'Join the marketplace'
                )}
              </Button>
              <Message resource={resource} />
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};

const Message = ({ resource }: { resource: Record<string, any> }) => {
  return (
    <>
      {resource.state && (
        <Alert>
          <AlertContent className='flex flex-col gap-y-2'>
            <div className='inline-flex items-center w-full gap-x-2'>
              <LuBadgeAlert className='w-6 h-6 p-1 bg-red-200 rounded-full stroke-red-800' />
              <Text
                as='h6'
                weight={500}
                size='sm'
                className='flex-1 leading-tight'
              >
                {resource.error.message}
              </Text>
            </div>
            {Array.isArray(resource.error.details) ? (
              <Text className='space-y-1'>
                {resource.error.details.map(
                  (error: Record<string, any>, i: number) => (
                    <Text
                      as='li'
                      size='sm'
                      key={i}
                      className='px-2'
                    >
                      {error.msg}
                    </Text>
                  )
                )}
              </Text>
            ) : null}
          </AlertContent>
        </Alert>
      )}
    </>
  );
};
