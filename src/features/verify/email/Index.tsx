import { useSearchParams } from 'react-router-dom';
import { useVerifyEmail } from './hooks/useVerifyEmail';
import { Message } from './components/Message';
import { FormError } from '../../shared/FormError';
import { Form } from './components/Form';
import { Div } from '../../../components/Div';

export const Email = () => {
  const [searchParams] = useSearchParams();
  const { status, verify } = useVerifyEmail();

  const onSubmit = async () => {
    verify({
      email: searchParams.get('email') as string,
      token: searchParams.get('token') as string,
    });
  };

  if (status.state === 'success') {
    return <Message />;
  }

  return (
    <Div className='px-3 mx-auto mt-12 space-y-5 sm:px-0 sm:w-96'>
      <Form
        onSubmit={onSubmit}
        isLoading={status.isLoading}
      />
      <FormError error={status.state === 'error' ? status.error : null} />
    </Div>
  );
};
