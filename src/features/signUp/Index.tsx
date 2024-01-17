import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useSignUp } from './hooks/useSignUp';
import { Success } from './components/Success';
import { FormError } from '../shared/FormError';
import { FormGroup } from './components/FormGroup';

interface InitialValuesTypes {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  password: string;
  agree: boolean;
}

const initialValues: InitialValuesTypes = {
  firstName: '',
  lastName: '',
  email: '',
  bio: '',
  password: '',
  agree: false,
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
    .min(15, 'Minimum of 15 characters')
    .max(255, 'Maximum of 255 characters'),
  password: yup
    .string()
    .required('Provide your password')
    .min(8, 'At least 8 characters long'),
  agree: yup
    .boolean()
    .required('Accept our terms')
    .oneOf([true], 'To sign up, you must agree to our Terms of service.'),
});

export const SignUp = () => {
  const { status, signUp } = useSignUp();

  const handleSubmit = async (values: InitialValuesTypes) => {
    const { agree, ...payload } = values;
    await signUp(payload);
  };

  if (status.state === 'success') {
    return <Success />;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className='space-y-5'>
        <FormGroup isLoading={status.isLoading} />
        <FormError error={status.error} />
      </Form>
    </Formik>
  );
};
