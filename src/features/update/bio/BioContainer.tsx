import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useOutletContext } from 'react-router-dom';
import { UserSchema } from '../../../utils/types';
import { Text } from '../../../components/ui/Text';
import { Fields } from './components/Fields';
import { ActionButtons } from '../util/ActionButtons';
import { useUpdateBio } from './hooks/useUpdateBio';
import { FormErrorToast } from '../../../components/templates/FormErrorToast';

interface Schema {
  bio: string;
}

const validationSchema = yup.object().shape({
  bio: yup
    .string()
    .required('Provide your biography')
    .min(100, 'Minimum of 100 characters')
    .max(256, 'Maximum of 256 characters'),
});

export const BioContainer = () => {
  const { resource, updateBio } = useUpdateBio();
  const { bio } = useOutletContext() as UserSchema;
  const initialValues: Schema = { bio: bio };
  const [action, setAction] = useState<'view' | 'edit'>('view');

  const handleSubmit = (values: Schema) => {
    updateBio(values, () => setAction('view'));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className='space-y-1'>
        {action === 'view' ? (
          <Text
            as='p'
            size='sm'
            accent='medium'
          >
            {bio}
          </Text>
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
