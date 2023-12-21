import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useOutletContext } from 'react-router-dom';
import { UserSchema } from '../../../utils/types';
import { Text } from '../../../components/ui/Text';
import { FormFields } from './components/FormFields';
import { useUpdateName } from './hooks/useUpdateName';
import { FormErrorToast } from '../../../components/templates/FormErrorToast';
import { ActionButtons } from '../util/ActionButtons';

interface Schema {
  firstName: string;
  lastName: string;
}

const validationSchema = yup.object().shape({
  firstName: yup.string().required('Enter a valid first name'),
  lastName: yup.string().required('Enter a valid last name'),
});

export const NameContainer = () => {
  const { firstName, lastName } = useOutletContext() as UserSchema;
  const { resource, updateNames } = useUpdateName();
  const [action, setAction] = useState<'edit' | 'view'>('view');

  const initialValues: Schema = {
    firstName: firstName,
    lastName: lastName,
  };

  const handleSubmit = async (values: Schema) => {
    await updateNames(values, () => setAction('view'));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className='space-y-1'>
        {action === 'view' ? (
          <Text
            as='p'
            size='sm'
            className='flex flex-col capitalize gap-y-1'
          >
            {`${firstName} ${lastName}`}
          </Text>
        ) : (
          <FormFields />
        )}

        <ActionButtons
          action={action}
          setAction={setAction}
          isLoading={resource.isLoading}
        />

        {/* form error */}
        {resource.state === 'error' ? (
          <FormErrorToast error={resource.error} />
        ) : null}
      </Form>
    </Formik>
  );
};
