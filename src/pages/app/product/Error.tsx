import React from 'react';
import { useRouteError } from 'react-router-dom';
import { ErrorHandler } from '../../../templates/ErrorHandler';

export const ProductPageError = () => {
  const { message } = useRouteError() as { message: string };

  return (
    <ErrorHandler
      message={message}
      description='We are unable to fetch the products from the server. Try refreshing the page or contact us for more support.'
    />
  );
};
