import React from 'react';
import { Card, CardDescription, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useVerifyToken } from '../../hooks/user/useVerifyToken';
import { LuBellDot, LuHeartHandshake } from 'react-icons/lu';
import { Text } from '../../components/ui/Text';
import { Spinner } from '../../components/ui/Spinner';
import { Alert, AlertContent, AlertIcon } from '../../components/ui/Alert';

export const VerifyTokenContainer = () => {
  const { token } = useParams();
  const { resource, verifyToken } = useVerifyToken();

  const onSubmit = async () => {
    if (token) {
      await verifyToken(token, (data) => console.log(data));
    }
  };

  return (
    <Card className='w-full mx-auto space-y-5 shadow-xl md:w-3/6 lg:w-2/6 ring-0 shadow-zinc-200/50'>
      {resource.state === 'success' ? (
        <SuccessAlert />
      ) : (
        <>
          <Prompt />
          <Button
            onClick={onSubmit}
            disabled={resource.isLoading!}
          >
            {resource.isLoading ? (
              <Spinner variant='light' />
            ) : (
              'Click to verify'
            )}
          </Button>

          {resource.error && (
            <Alert variant='danger'>
              <AlertContent className='inline-flex items-center w-full gap-x-2'>
                <AlertIcon>
                  <LuBellDot className='w-full h-full' />
                </AlertIcon>
                <Text
                  as='p'
                  size='sm'
                  weight={500}
                  className='flex-1'
                >
                  {resource.error.message}
                </Text>
                <Link to='/sign-up'>
                  <Button
                    variant='outline'
                    size='xs'
                  >
                    Sign up
                  </Button>
                </Link>
              </AlertContent>
            </Alert>
          )}
        </>
      )}
    </Card>
  );
};

const Prompt = () => {
  return (
    <>
      <div className='space-y-1'>
        <CardTitle
          as='h5'
          weight={600}
        >
          Verify your account
        </CardTitle>
        <CardDescription>
          Click on the button below to verify your account and start uploading
          those awesome products
        </CardDescription>
      </div>
    </>
  );
};

const SuccessAlert = () => {
  return (
    <div className='flex flex-col items-center gap-y-5'>
      <LuHeartHandshake className='w-12 h-12 bg-green-200 rounded-full p-1.5' />
      <div className='space-y-1 text-center'>
        <CardTitle weight={600}>Account verification successful</CardTitle>
        <CardDescription>
          You are now a verified member, continue to sign in to log into your
          account explore the community
        </CardDescription>
      </div>

      <Link to='/auth'>
        <Button>Continue to Sign in</Button>
      </Link>
    </div>
  );
};
