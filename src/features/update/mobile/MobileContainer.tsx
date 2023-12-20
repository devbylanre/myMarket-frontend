import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Text } from '../../../components/ui/Text';
import { useOutletContext } from 'react-router-dom';
import { UserSchema } from '../../../utils/types';
import { Fields } from './components/Fields';
import { useUpdateMobile } from './hooks/useUpdateMobile';
import { ActionButtons } from '../util/ActionButtons';
import { FormErrorToast } from '../../../components/templates/FormErrorToast';

interface Schema {
  country: 'nigeria';
  countryCode: 234;
  mobile: number | null;
}

export const MobileContainer = () => {
  const { resource, updateMobile } = useUpdateMobile();
  const { mobile } = useOutletContext() as UserSchema;
  const [action, setAction] = useState<'edit' | 'view'>('view');

  const initialValues: Schema = {
    country: 'nigeria',
    countryCode: 234,
    mobile: null,
  };

  const handleSubmit = (values: Schema) => {
    updateMobile({ mobile: { ...values } });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className='space-y-1'>
        {action === 'view' ? (
          <>
            <Text
              as='p'
              size='sm'
              accent='medium'
            >
              Nigeria
            </Text>
            <Text
              as='p'
              size='sm'
              accent='medium'
            >
              {mobile.number > 0
                ? `+${mobile.countryCode} ${mobile.number}`
                : 'Not yet provided, Update'}
            </Text>
          </>
        ) : (
          <Fields />
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
