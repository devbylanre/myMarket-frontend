import * as yup from 'yup';
import { useOutletContext } from 'react-router-dom';
import { IUser } from '../../../utils/types';
import { Text } from '../../../components/ui/Text';
import { Form } from './components/Form';
import { useUpdateBio } from './hooks/useUpdateBio';
import {
  SettingsForm,
  SettingsFormButtons,
  SettingsFormMessage,
} from '../../../components/templates/settings/SettingsForm';

interface IForm {
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
  const { bio } = useOutletContext() as IUser;
  const initialValues: IForm = { bio: bio };

  const handleSubmit = (values: IForm) => {
    updateBio({ bio: values.bio });
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
          {action === 'view' ? (
            <Text
              as='p'
              size='sm'
              accent='medium'
            >
              {bio}
            </Text>
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
