import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useAuth } from './hooks/useAuth';
import { Success } from './components/Success';
import { useNavigate } from 'react-router-dom';
import { FormError } from '../../shared/FormError';
import { FormGroup } from './components/FormGroup';

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

export const Email = () => {
  const { status, signIn } = useAuth();
  const navigate = useNavigate();
  const TIMER = 3000;

  const handleSubmit = async (values: InitialValueTypes) => {
    await signIn(values, () => {
      setTimeout(() => navigate('/app/shop'), TIMER);
    });
  };

  if (status.state === 'success') {
    return <Success timeout={TIMER} />;
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
