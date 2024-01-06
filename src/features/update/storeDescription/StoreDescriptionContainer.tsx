import * as yup from 'yup';
import { Form } from './components/Form';
import { useUpdateStoreDescription } from './hooks/useUpdateStoreDescription';
import { useOutletContext } from 'react-router-dom';
import {
  SettingsForm,
  SettingsFormButtons,
  SettingsFormMessage,
} from '../../../pages/app/settings/shared/SettingsForm';
import { Data } from './components/Data';
import { User } from '../../../contexts/user.types';

export const StoreDescriptionContainer = () => {
  const { store } = useOutletContext() as User;

  const initialValues: { description: string } = {
    description: store.description,
  };

  const { status, updateStoreDescription } = useUpdateStoreDescription();

  const handleSubmit = async (values: { description: string }) => {
    await updateStoreDescription({
      store: { description: values.description },
    });
  };

  const validationSchema = yup.object().shape({
    description: yup.string().required('Describe yur store'),
  });

  return (
    <SettingsForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      status={status}
    >
      {(action) => (
        <>
          {action === 'edit' ? (
            <Form />
          ) : (
            <Data description={store.description} />
          )}
          <SettingsFormButtons />
          <SettingsFormMessage />
        </>
      )}
    </SettingsForm>
  );
};
