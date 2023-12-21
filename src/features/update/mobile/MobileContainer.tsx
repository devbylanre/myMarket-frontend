import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { Text } from '../../../components/ui/Text';
import { useOutletContext } from 'react-router-dom';
import { UserSchema } from '../../../utils/types';
import { Fields } from './components/Fields';
import { useUpdateMobile } from './hooks/useUpdateMobile';
import { ActionButtons } from '../util/ActionButtons';
import { FormErrorToast } from '../../../components/templates/FormErrorToast';

interface Schema {
  countryCode: 234;
  number: number;
}

const validationSchema = yup.object().shape({
  countryCode: yup.number().required('Provide your country code'),
  number: yup.number().required('Provide your mobile number'),
});

export const MobileContainer = () => {
  const { resource, updateMobile } = useUpdateMobile();
  const { mobile } = useOutletContext() as UserSchema;
  const [action, setAction] = useState<'edit' | 'view'>('view');

  const initialValues: Schema = {
    countryCode: 234,
    number: mobile.number,
  };

  const handleSubmit = (values: Schema) => {
    updateMobile({ mobile: { ...values } }, () => setAction('view'));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
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
