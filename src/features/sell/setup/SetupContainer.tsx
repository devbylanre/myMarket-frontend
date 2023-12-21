import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as yup from 'yup';
import { Prompt } from './components/Prompt';
import { Forms } from './components/Forms';
import { Success } from './components/Success';
import { useUpdateSeller } from './hooks/useUpdateSeller';
import { FormErrorAlert } from '../../../components/templates/FormErrorAlert';

interface InitialValues {
  name: string;
  description: string;
  country: string;
  state: string;
  city: string;
  address: string;
  accept: boolean;
}

const initialValues: InitialValues = {
  name: '',
  description: '',
  country: 'Nigeria',
  state: '',
  city: '',
  address: '',
  accept: false,
};

const validationSchema = yup.object().shape({
  name: yup.string().required('What is the name of your store'),
  description: yup
    .string()
    .required('Give your store description')
    .min(100, 'Minimum of 100 characters')
    .max(256, 'Maximum of 256 characters'),
  country: yup.string().required('Which country is your store located'),
  state: yup.string().required('Which state is your store located'),
  city: yup.string().required('Which city is your store located'),
  address: yup.string().required('Provide your store address'),
  accept: yup
    .boolean()
    .required('Accept our terms')
    .oneOf([true], 'To sign up, you must agree to our Terms of service.'),
});

type Component = 'prompt' | 'set-up' | 'success';

export const SetupContainer = () => {
  const [component, setComponent] = useState<Component>('prompt');
  const { resource, updateSeller } = useUpdateSeller();

  const renderComponent = (
    component: Component,
    formik: Record<string, any>
  ) => {
    switch (component) {
      case 'prompt':
        return <Prompt onSwitch={() => setComponent('set-up')} />;
      case 'set-up':
        return <Forms isLoading={resource.isLoading} />;
      case 'success':
        return <Success />;
      default:
        return null;
    }
  };

  const handleSubmit = async (values: InitialValues) => {
    await updateSeller(
      {
        isSeller: true,
        store: {
          name: values.name,
          description: values.description,
          location: {
            city: values.city,
            state: values.state,
            country: values.country,
            address: values.address,
          },
        },
      },
      (data) => setComponent('success')
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <motion.div
            key={component}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className='flex flex-col w-full mx-auto sm:w-3/5 gap-y-5'
          >
            {renderComponent(component, formik)}
            {resource.state === 'error' && (
              <FormErrorAlert error={resource.error} />
            )}
          </motion.div>
        </Form>
      )}
    </Formik>
  );
};
