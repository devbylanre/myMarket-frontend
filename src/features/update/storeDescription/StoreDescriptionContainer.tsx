import { Form, Formik } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import { DescriptionForm } from './components/DescriptionForm';
import { Text } from '../../../components/ui/Text';
import { ActionButtons } from '../util/ActionButtons';
import { useUpdateStoreDescription } from './hooks/useUpdateStoreDescription';
import { FormErrorToast } from '../../../components/templates/FormErrorToast';
import { UserSchema } from '../../../utils/types';
import { useOutletContext } from 'react-router-dom';

export const StoreDescriptionContainer = () => {
  const { store } = useOutletContext() as UserSchema;

  const initialValues: { description: string } = {
    description: store.description,
  };

  const [action, setAction] = useState<'view' | 'edit'>('view');

  const { resource, updateStoreDescription } = useUpdateStoreDescription();

  const handleSubmit = async (values: { description: string }) => {
    await updateStoreDescription(
      {
        store: { ...store, description: values.description },
      },
      () => setAction('view')
    );
  };

  const validationSchema = yup.object().shape({
    description: yup.string().required('Describe yur store'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        {action === 'view' ? (
          <Text
            as='p'
            size='sm'
            accent='medium'
          >
            {store.description}
          </Text>
        ) : (
          <DescriptionForm />
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
