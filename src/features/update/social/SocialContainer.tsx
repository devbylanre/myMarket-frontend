import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { SocialForm } from './components/SocialForm';
import { ActionButtons } from '../util/ActionButtons';
import { useOutletContext } from 'react-router-dom';
import { UserSchema } from '../../../utils/types';
import { useUpdateSocial } from './hooks/useUpdateSocial';
import { FormErrorToast } from '../../../components/templates/FormErrorToast';
import { Data } from './components/Data';

interface FormSchema {
  accounts: { platform: string; url: string }[];
}

export const SocialContainer = () => {
  const { accounts } = useOutletContext() as UserSchema;
  const { resource, updateSocial } = useUpdateSocial();
  const [action, setAction] = useState<'view' | 'edit'>('view');

  const initialValues: FormSchema = {
    accounts: (accounts.length > 0 && accounts) || [{ platform: '', url: '' }],
  };

  const validationSchema = yup.object().shape({
    accounts: yup.array().of(
      yup.object().shape({
        platform: yup.string().required('Select a platform'),
        url: yup.string().required('Provide a URL'),
      })
    ),
  });

  const handleSubmit = async (values: FormSchema) => {
    await updateSocial({ accounts: [...values.accounts] }, () =>
      setAction('view')
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className='space-y-1'>
        {action === 'edit' ? <SocialForm /> : <Data accounts={accounts} />}

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
