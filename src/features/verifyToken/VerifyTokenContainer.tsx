import { Card } from '../../components/ui/Card';
import { useParams } from 'react-router-dom';
import { useVerifyToken } from './hooks/useVerifyToken';
import { Success } from './components/Success';
import { Error } from './components/Error';
import { Component } from './components/Component';

export const VerifyTokenContainer = () => {
  const { token } = useParams();
  const { resource, verifyToken } = useVerifyToken();

  const onSubmit = async () => {
    if (token) {
      await verifyToken(token);
    }
  };

  return (
    <Card className='w-full mx-auto space-y-5 shadow-xl md:w-3/6 lg:w-2/6 ring-0 shadow-zinc-200/50'>
      {resource.state === 'success' ? (
        <Success />
      ) : (
        <>
          <Component
            onSubmit={onSubmit}
            isLoading={resource.isLoading}
          />
          {resource.error && <Error message={resource.error.message} />}
        </>
      )}
    </Card>
  );
};
