import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useOutletContext } from 'react-router-dom';
import { UserSchema } from '../../../utils/types';
import { NameForm } from './components/NameForm';
import { ActionButtons } from '../util/ActionButtons';
import { useUpdateStoreName } from './hooks/useUpdateStoreName';
import { FormErrorToast } from '../../../components/templates/FormErrorToast';
import { Text } from '../../../components/ui/Text';

export const StoreNameContainer = () => {
  const { store } = useOutletContext() as UserSchema;
  const [action, setAction] = useState<'view' | 'edit'>('view');
  const { resource, updateStoreName } = useUpdateStoreName();

  const initialValues: { name: string } = {
    name: store.name,
  };

  const handleSubmit = async (values: { name: string }) => {
    await updateStoreName({ store: { ...store, name: values.name } }, () =>
      setAction('view')
    );
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Give your store a name'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className='space-y-1'>
        {action === 'view' ? (
          <Text
            as='h6'
            size='sm'
            accent='medium'
          >
            {store.name}
          </Text>
        ) : (
          <NameForm />
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
