import React from 'react';
import { Email } from '../../features/verify/email/Index';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';

export const VerifyPage = () => {
  const [params] = useSearchParams();
  const type = params.get('type') as string;

  const Component = () => {
    switch (type) {
      case 'email':
        return <Email />;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Verification</title>
      </Helmet>

      <Component />
    </>
  );
};
