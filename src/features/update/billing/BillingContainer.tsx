import { useOutletContext } from 'react-router-dom';
import * as yup from 'yup';
import { Form } from './components/Form';
import { useUpdateBilling } from './hooks/useUpdateBilling';
import { Data } from './components/Data';
import {
  SettingsForm,
  SettingsFormButtons,
  SettingsFormMessage,
} from '../../../pages/app/settings/shared/SettingsForm';
import { User } from '../../../contexts/user.types';

interface IForm {
  country: 'Nigeria' | '';
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

export const BillingContainer = () => {
  const { billing } = useOutletContext() as User;
  const { status, updateBilling } = useUpdateBilling();

  const initialValues: IForm = {
    country: 'Nigeria',
    state: billing.state,
    city: billing.city,
    address: billing.address,
  };

  const handleSubmit = (values: IForm) => {
    updateBilling({ billing: { ...values } });
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
          {action === 'view' ? <Data billing={billing} /> : <Form />}
          <SettingsFormButtons />
          <SettingsFormMessage />
        </>
      )}
    </SettingsForm>
  );
};
