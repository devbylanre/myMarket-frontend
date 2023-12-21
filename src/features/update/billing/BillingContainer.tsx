import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { UserSchema } from '../../../utils/types';
import { Form, Formik } from 'formik';
import { FormFields } from './components/FormFields';
import { useUpdateBilling } from './hooks/useUpdateBilling';
import { Data } from './components/Data';
import { ActionButtons } from '../util/ActionButtons';
import { FormErrorToast } from '../../../components/templates/FormErrorToast';

interface FormSchema {
  country: 'nigeria' | '';
  state: string;
  city: string;
  address: string;
}

export const BillingContainer = () => {
  const { billing } = useOutletContext() as UserSchema;
  const [action, setAction] = useState<'view' | 'edit'>('view');
  const { resource, updateBilling } = useUpdateBilling();

  const initialValues: FormSchema = {
    country: 'nigeria',
    state: billing.state,
    city: billing.city,
    address: billing.address,
  };

  const handleSubmit = (values: FormSchema) => {
    updateBilling({ billing: { ...values } }, () => setAction('view'));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form>
        {action === 'view' ? <Data billing={billing} /> : <FormFields />}

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
