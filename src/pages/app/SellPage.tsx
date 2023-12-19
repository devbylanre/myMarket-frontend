import React from 'react';
// import { SellerContainer } from '../features/seller/SellerContainer';
import { SellContainer } from '../../features/sell/SellContainer';
import { SellerSetup } from '../../components/templates/SellerSetup';
import { UserSchema } from '../../utils/props';
import { useOutletContext } from 'react-router-dom';

export const Sell = () => {
  const { isSeller } = useOutletContext() as UserSchema;

  return (
    <div className='flex justify-center'>
      <div className='w-full p-3 mt-5 space-y-8 sm:w-4/5 lg:w-3/5'>
        {isSeller ? <SellContainer /> : <SellerSetup />}
      </div>
    </div>
  );
};
