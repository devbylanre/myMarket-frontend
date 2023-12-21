import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useOutletContext } from 'react-router-dom';
import { UserSchema } from '../../../utils/types';
import { LocationData } from './components/LocationData';
import { LocationForm } from './components/LocationForm';
import { ActionButtons } from '../util/ActionButtons';
import { useUpdateStoreLocation } from './hooks/useUpdateStoreLocation';
import { FormErrorToast } from '../../../components/templates/FormErrorToast';

interface FormSchema {
  country: 'Nigeria';
  state: string;
  city: string;
  address: string;
}

export const StoreLocationContainer = () => {
  const { resource, updateStoreLocation } = useUpdateStoreLocation();

  const { store } = useOutletContext() as UserSchema;
  const { location } = store;

  const [action, setAction] = useState<'edit' | 'view'>('view');

  const initialValues: FormSchema = {
    country: 'Nigeria',
    state: location.state,
    city: location.city,
    address: location.address,
  };

  const validationSchema = yup.object().shape({
    country: yup.string().required('Provide a country'),
    state: yup.string().required('Provide a state'),
    city: yup.string().required('Provide a city'),
    address: yup.string().required('Provide a address'),
  });

  const handleSubmit = async (values: FormSchema) => {
    await updateStoreLocation(
      { store: { location: { ...location, ...values } } },
      () => setAction('view')
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className='space-y-1'>
        {action === 'view' ? (
          <LocationData location={location} />
        ) : (
          <LocationForm />
        )}

        <ActionButtons
          action={action}
          setAction={setAction}
          isLoading={resource.isLoading}
        />

        {resource.state === 'error' ? (
          <FormErrorToast error={resource.error} />
        ) : null}
      </Form>
    </Formik>
  );
};
