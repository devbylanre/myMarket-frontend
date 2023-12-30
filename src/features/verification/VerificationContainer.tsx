import { useSearchParams } from 'react-router-dom';
import { useVerification } from './hooks/useVerification';
import { Success } from './components/Success';
import { FormError } from '../shared/FormError';
import { Button } from '../../components/ui/Button';
import { Spinner } from '../../components/ui/Spinner';
import { Card } from './components/Card';

export const VerificationContainer = () => {
  const [searchParams] = useSearchParams();
  const { status, verification } = useVerification();

  const onSubmit = async () => {
    verification({
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
            {status.isLoading ? (
              <Spinner variant='light' />
            ) : (
              'Verify my account'
            )}
          </Button>
          <FormError error={status.state === 'error' ? status.error : null} />
        </>
      )}
    </>
  );
};
