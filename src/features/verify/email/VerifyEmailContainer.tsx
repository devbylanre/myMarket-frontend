import { useSearchParams } from 'react-router-dom';
import { useVerifyEmail } from './hooks/useVerifyEmail';
import { Success } from './components/Success';
import { FormError } from '../../shared/FormError';
import { Button } from '../../../components/Button';
import { Spinner } from '../../../components/Spinner';
import { Card } from './components/Card';

export const VerifyEmailContainer = () => {
  const [searchParams] = useSearchParams();
  const { status, verify } = useVerifyEmail();

  const onSubmit = async () => {
    verify({
      email: searchParams.get('email') as string,
      token: searchParams.get('token') as string,
    });
  };

  return (
    <>
      {status.state === 'success' ? (
        <Success />
      ) : (
        <>
          <Card />
          <Button
            type='button'
            size='sm'
            variant='outline'
            onClick={onSubmit}
            disabled={status.isLoading!}
          >
            {status.isLoading ? <Spinner /> : 'Verify my account'}
          </Button>
        </>
      )}
      <FormError error={status.state === 'error' ? status.error : null} />
    </>
  );
};
