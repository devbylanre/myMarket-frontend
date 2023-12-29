import React from 'react';
import { VerifyTokenContainer } from '../features/verifyToken/VerifyTokenContainer';
import { Helmet } from 'react-helmet-async';

export const VerifyTokenPage = () => {
  return (
    <>
      <Helmet>
        <title>Account verification</title>
      </Helmet>

      <div className='w-full mx-auto mt-8 space-y-5 sm:mt-12 lg:w-2/6 sm:w-3/5'>
        <VerifyTokenContainer />
      </div>
    </>
  );
};
