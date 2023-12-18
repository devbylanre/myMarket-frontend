import React from 'react';
// import { SellerContainer } from '../features/seller/SellerContainer';
import { SellContainer } from '../../features/sell/SellContainer';

export const Sell = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-full p-3 mt-5 space-y-8 sm:w-4/5 lg:w-3/5'>
        {/* <SellerContainer /> */}

        <SellContainer />
      </div>
    </div>
  );
};
