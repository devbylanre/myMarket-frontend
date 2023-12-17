import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '../../../components/ui/Text';
import { Spinner } from '../../../components/ui/Spinner';

export const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/app/'), 5000);
  }, [navigate]);

  return (
    <>
      <Spinner variant='primary' />
      <div className='space-y-1'>
        <Text
          as='h5'
          size='2xl'
          weight={500}
        >
          Authentication Successful
        </Text>
        <Text
          as='p'
          size='sm'
        >
          We are redirecting you to your dashboard in 5s
        </Text>
      </div>
    </>
  );
};
