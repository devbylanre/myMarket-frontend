import * as yup from 'yup';
import { useOutletContext } from 'react-router-dom';
import { Form } from './components/Form';
import { useUpdateStoreName } from './hooks/useUpdateStoreName';
import {
  SettingsForm,
  SettingsFormButtons,
  SettingsFormMessage,
} from '../../../pages/app/settings/shared/SettingsForm';
import { Data } from './components/Data';
import { User } from '../../../contexts/user.types';

interface IForm {
  name: string;
}

export const StoreNameContainer = () => {
  const { store } = useOutletContext() as User;
  const { status, updateStoreName } = useUpdateStoreName();

  const initialValues: IForm = {
    name: store.name,
  };

  const handleSubmit = async (values: IForm) => {
    await updateStoreName({ store: { name: values.name } });
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Give your store a name'),
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
          {action === 'view' ? <Data name={store.name} /> : <Form />}
          <SettingsFormButtons />
          <SettingsFormMessage />
        </>
      )}
    </SettingsForm>
  );
};
