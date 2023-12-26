import * as yup from 'yup';
import { Form } from './components/Form';
import { useOutletContext } from 'react-router-dom';
import { useUpdateSocial } from './hooks/useUpdateSocial';
import { Data } from './components/Data';
import {
  SettingsForm,
  SettingsFormButtons,
  SettingsFormMessage,
} from '../../../components/templates/settings/SettingsForm';
import { User } from '../../../contexts/user.types';

interface IForm {
  accounts: { platform: string; url: string }[];
}

const validationSchema = yup.object().shape({
  accounts: yup.array().of(
    yup.object().shape({
      platform: yup.string().required('Select a platform'),
      url: yup.string().required('Provide a URL'),
    })
  ),
});

export const SocialContainer = () => {
  const { accounts } = useOutletContext() as User;
  const { status, updateSocial } = useUpdateSocial();

  const initialValues: IForm = {
    accounts: accounts || [{ platform: '', url: '' }],
  };

  const handleSubmit = async (values: IForm) => {
    await updateSocial({ accounts: [...values.accounts] });
  };

  return (
    <SettingsForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      status={status}
    >
      {(action) => (
        <>
          {action === 'view' ? <Data accounts={accounts} /> : <Form />}
          <SettingsFormButtons />
          <SettingsFormMessage />
        </>
      )}
    </SettingsForm>
  );
};
