import React from 'react';
import { VerifyEmailContainer } from '../features/verify/email/VerifyEmailContainer';
import { Helmet } from 'react-helmet-async';

export const VerifyEmailPage = () => {
  return (
    <>
      <Helmet>
        <title>Account verification</title>
      </Helmet>

      <div className='flex flex-col items-center mx-auto mt-8 gap-y-5 max-w-[420px]'>
        <VerifyEmailContainer />
      </div>
    </>
  );
};
