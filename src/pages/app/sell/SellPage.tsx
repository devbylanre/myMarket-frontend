import React from 'react';
import { CreateContainer } from '../../../features/sell/create/CreateContainer';
import { useOutletContext } from 'react-router-dom';
import { IUser } from '../../../utils/types';
import { SellerSetup } from '../../../components/templates/SellerSetup';

export const SellPage = () => {
  const { isSeller } = useOutletContext()! as IUser;

  return (
    <div className='w-full mx-auto sm:w-4/5 md:w-3/5 xl:w-2/5'>
      {isSeller ? <CreateContainer /> : <SellerSetup />}
    </div>
  );
};
