import React from 'react';
import { VerificationContainer } from '../features/verification/VerificationContainer';
import { Helmet } from 'react-helmet-async';

export const EmailPage = () => {
  return (
    <>
      <Helmet>
        <title>Account verification</title>
      </Helmet>

      <div className='flex flex-col items-center mx-auto mt-8 gap-y-5 max-w-[420px]'>
        <VerificationContainer />
      </div>
    </>
  );
};
