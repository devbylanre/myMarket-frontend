import { useParams } from 'react-router-dom';
import { useVerifyToken } from './hooks/useVerify';
import { Success } from './components/Success';
import { FormError } from '../../components/templates/FormError';
import { Button } from '../../components/ui/Button';
import { Spinner } from '../../components/ui/Spinner';
import { Text } from '../../components/ui/Text';

export const VerifyTokenContainer = () => {
  const { token } = useParams();
  const { status, verify } = useVerifyToken();

  const onSubmit = async () => {
    if (token) {
      await verify(token);
    }
  };

  return (
    <>
      {status.state === 'success' ? (
        <Success />
      ) : (
        <>
          <div className='space-y-5'>
            <div className='space-y-2'>
              <Text
                as='h5'
                size='2xl'
                weight={500}
              >
                Verify your account
              </Text>
              <Text
                as='p'
                size='sm'
              >
                Click on the button to verify your account and proceed with the
                authentication process
              </Text>
            </div>
            <Button
              type='button'
              size='sm'
              onClick={onSubmit}
              disabled={status.isLoading!}
            >
              {status.isLoading ? (
                <Spinner variant='light' />
              ) : (
                'Verify my account'
              )}
            </Button>
          </div>
        </>
      )}
      {status.state === 'error' ? <FormError error={status.error} /> : null}
    </>
  );
};
