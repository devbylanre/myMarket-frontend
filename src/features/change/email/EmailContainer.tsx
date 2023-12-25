import * as yup from 'yup';
import { EmailForm } from './components/EmailForm';
import {
  SettingsForm,
  SettingsFormButtons,
  SettingsFormMessage,
} from '../../../components/templates/settings/SettingsForm';
import { useChangeEmail } from './hooks/useChangeEmail';
import { IUser } from '../../../utils/types';
import { useOutletContext } from 'react-router-dom';
import { Text } from '../../../components/ui/Text';

interface IForm {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Provide a new email address')
    .email('Provide a valid email address'),
  password: yup
    .string()
    .required('Provide your password')
    .min(8, 'Password must have at least 8 characters'),
});

export const EmailContainer = () => {
  const { resource, changeEmail } = useChangeEmail();
  const { _id, email } = useOutletContext() as IUser;
  const initialValues: IForm = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values: IForm) => {
    changeEmail(_id, { email: values.email, password: values.password });
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
          {action === 'edit' ? (
            <EmailForm />
          ) : (
            <Text
              as='p'
              size='sm'
            >
              {email}
            </Text>
          )}
          <SettingsFormButtons />
          <SettingsFormMessage />
        </>
      )}
    </SettingsForm>
  );
};
