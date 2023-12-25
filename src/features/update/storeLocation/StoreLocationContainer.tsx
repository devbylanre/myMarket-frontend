import * as yup from 'yup';
import { useOutletContext } from 'react-router-dom';
import { IUser } from '../../../utils/types';
import { useUpdateStoreLocation } from './hooks/useUpdateStoreLocation';
import {
  SettingsForm,
  SettingsFormButtons,
  SettingsFormMessage,
} from '../../../components/templates/settings/SettingsForm';
import { Data } from './components/Data';
import { Form } from './components/Form';

interface IForm {
  country: 'Nigeria';
  state: string;
  city: string;
  address: string;
}

const validationSchema = yup.object().shape({
  country: yup.string().required('Provide a country'),
  state: yup.string().required('Provide a state'),
  city: yup.string().required('Provide a city'),
  address: yup.string().required('Provide a address'),
});

export const StoreLocationContainer = () => {
  const { resource, updateStoreLocation } = useUpdateStoreLocation();
  const { store } = useOutletContext() as IUser;
  const { location } = store;

  const initialValues: IForm = {
    country: 'Nigeria',
    state: location.state || '',
    city: location.city || '',
    address: location.address || '',
  };

  const handleSubmit = async (values: IForm) => {
    await updateStoreLocation({
      store: { ...store, location: { ...values } },
    });
  };

  return (
    <SettingsForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      resource={resource}
    >
      {(action) => (
        <>
          {action === 'view' ? <Data location={store.location} /> : <Form />}
          <SettingsFormButtons />
          <SettingsFormMessage />
        </>
      )}
    </SettingsForm>
  );
};
