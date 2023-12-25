import * as yup from 'yup';
import { useOutletContext } from 'react-router-dom';
import { IUser } from '../../../utils/types';
import { Form } from './components/Form';
import { useUpdateStoreName } from './hooks/useUpdateStoreName';
import {
  SettingsForm,
  SettingsFormButtons,
  SettingsFormMessage,
} from '../../../components/templates/settings/SettingsForm';
import { Data } from './components/Data';

interface IForm {
  name: string;
}

export const StoreNameContainer = () => {
  const { store } = useOutletContext() as IUser;
  const { resource, updateStoreName } = useUpdateStoreName();

  const initialValues: IForm = {
    name: store.name,
  };

  const handleSubmit = async (values: IForm) => {
    await updateStoreName({ store: { ...store, name: values.name } });
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Give your store a name'),
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
          {action === 'view' ? <Data name={store.name} /> : <Form />}
          <SettingsFormButtons />
          <SettingsFormMessage />
        </>
      )}
    </SettingsForm>
  );
};
