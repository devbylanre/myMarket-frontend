import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as yup from 'yup';
import { Message } from './components/Message';
import { SetUp } from './components/SetUp';
import { Success } from './components/Success';

interface InitialValues {
  name: string;
  description: string;
  country: string;
  state: string;
  city: string;
  address: string;
}

const initialValues: InitialValues = {
  name: '',
  description: '',
  country: 'Nigeria',
  state: '',
  city: '',
  address: '',
};

const validationSchema = yup.object().shape({
  name: yup.string().required('Give your store a name'),
  description: yup
    .string()
    .required('Give your store description')
    .min(100, 'Minimum of 100 characters')
    .max(250, 'Maximum of 250 characters'),
  country: yup.string().required('Which country is your store located'),
  state: yup.string().required('Which state is your store located'),
  city: yup.string().required('Which city is your store located'),
  address: yup.string().required('Provide your store address'),
});

export const SellerSetUpContainer = () => {
  const [component, setComponent] = useState<'message' | 'set-up' | 'success'>(
    'message'
  );

  const renderComponent = (component: string, formik: Record<string, any>) => {
    switch (component) {
      case 'message':
        return <Message onSwitch={() => setComponent('set-up')} />;
      case 'set-up':
        return <SetUp onSwitch={() => setComponent('success')} />;
      case 'success':
        return <Success />;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {(formik) => (
        <Form>
          <motion.div
            key={component}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {renderComponent(component, formik)}
          </motion.div>
        </Form>
      )}
    </Formik>
  );
};
