import * as yup from 'yup';
import { useOutletContext } from 'react-router-dom';
import { Form } from './components/Form';
import { useUpdateName } from './hooks/useUpdateName';
import {
  SettingsForm,
  SettingsFormButtons,
  SettingsFormMessage,
} from '../../../components/templates/settings/SettingsForm';
import { Data } from './components/Data';
import { User } from '../../../contexts/user.types';

interface IForm {
  firstName: string;
  lastName: string;
}

const validationSchema = yup.object().shape({
  firstName: yup.string().required('Enter a valid first name'),
  lastName: yup.string().required('Enter a valid last name'),
});

export const NameContainer = () => {
  const { firstName, lastName } = useOutletContext() as User;
  const { status, updateNames } = useUpdateName();

  const initialValues: IForm = {
    firstName: firstName,
    lastName: lastName,
  };

  const handleSubmit = async (values: IForm) => {
    await updateNames({
      firstName: values.firstName,
      lastName: values.lastName,
    });
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
          {action === 'view' ? (
            <Data
              firstName={firstName}
              lastName={lastName}
            />
          ) : (
            <Form />
          )}
          <SettingsFormButtons />
          <SettingsFormMessage />
        </>
      )}
    </SettingsForm>
  );
};
