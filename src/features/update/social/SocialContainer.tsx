import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { FormFields } from './components/FormFields';
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
    accounts: accounts,
  };

  const handleSubmit = async (values: FormSchema) => {
    await updateSocial({ accounts: values.accounts }, () => setAction('view'));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className='space-y-1'>
        {action === 'edit' ? <FormFields /> : <Data accounts={accounts} />}

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
