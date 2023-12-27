import React from 'react';
import { CreateContainer } from '../../../features/sell/create/CreateContainer';
import { useOutletContext } from 'react-router-dom';
import { SellerSetup } from '../../../components/templates/SellerSetup';
import { User } from '../../../contexts/user.types';
import { Text } from '../../../components/ui/Text';

export const SellPage = () => {
  const { isSeller } = useOutletContext() as User;

  return (
    <div className='flex flex-col gap-8 px-3 my-8 lg:gap-12 lg:w-4/5 lg:flex-row sm:px-8 lg:px-12'>
      <div className='space-y-2 lg:w-2/5'>
        <Text
          as='h5'
          weight={500}
          size='2xl'
        >
          Upload new product
        </Text>
        <Text as='p'>
          Upload new product in a few easy steps, fill the form with your new
          product details and then click on the button to upload it.
        </Text>
      </div>
      {isSeller ? <CreateContainer /> : <SellerSetup />}
    </div>
  );
};
