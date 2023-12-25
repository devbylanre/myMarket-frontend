import { useParams } from 'react-router-dom';
import { useVerifyToken } from './hooks/useVerifyToken';
import { Success } from './components/Success';
import { FormError } from '../../components/templates/FormError';
import { Button } from '../../components/ui/Button';
import { Spinner } from '../../components/ui/Spinner';
import { Text } from '../../components/ui/Text';

export const VerifyTokenContainer = () => {
  const { token } = useParams();
  const { resource, verifyToken } = useVerifyToken();

  const onSubmit = async () => {
    if (token) {
      await verifyToken(token);
    }
  };

  return (
    <>
      {resource.state === 'success' ? (
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
              disabled={resource.isLoading!}
            >
              {resource.isLoading ? (
                <Spinner variant='light' />
              ) : (
                'Verify my account'
              )}
            </Button>
          </div>
        </>
      )}
      {resource.state === 'error' ? <FormError error={resource.error} /> : null}
    </>
  );
};
