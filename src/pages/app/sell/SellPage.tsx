import React from 'react';
import { CreateContainer } from '../../../features/sell/create/CreateContainer';
import { useOutletContext } from 'react-router-dom';
import { SellerSetup } from '../../../components/templates/SellerSetup';
import { User } from '../../../contexts/user.types';

export const SellPage = () => {
  const { isSeller } = useOutletContext() as User;

  return (
    <div className='w-full mx-auto sm:w-4/5 md:w-3/5 xl:w-2/5'>
      {isSeller ? <CreateContainer /> : <SellerSetup />}
    </div>
  );
};
