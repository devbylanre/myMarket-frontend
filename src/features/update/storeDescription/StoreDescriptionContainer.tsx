import * as yup from 'yup';
import { Form } from './components/Form';
import { useUpdateStoreDescription } from './hooks/useUpdateStoreDescription';
import { IUser } from '../../../utils/types';
import { useOutletContext } from 'react-router-dom';
import {
  SettingsForm,
  SettingsFormButtons,
  SettingsFormMessage,
} from '../../../components/templates/settings/SettingsForm';
import { Data } from './components/Data';

export const StoreDescriptionContainer = () => {
  const { store } = useOutletContext() as IUser;

  const initialValues: { description: string } = {
    description: store.description,
  };

  const { resource, updateStoreDescription } = useUpdateStoreDescription();

  const handleSubmit = async (values: { description: string }) => {
    await updateStoreDescription({
      store: { ...store, description: values.description },
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
      resource={resource}
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
