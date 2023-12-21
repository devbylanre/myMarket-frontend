import React from 'react';
import { SettingsHeader } from '../../../../components/templates/SettingsHeader';
import { useOutletContext } from 'react-router-dom';
import { UserSchema } from '../../../../utils/types';
import { SellerSetup } from '../../../../components/templates/SellerSetup';
import { StoreName } from './StoreName';
import { StoreDescription } from './StoreDescription';

export const StorePage = () => {
  const { isSeller } = useOutletContext() as UserSchema;

  return (
    <>
      <SettingsHeader
        title='Store'
        highlight='Edit or customize your store settings'
      />

      {isSeller ? (
        <>
          <StoreName />
          <StoreDescription />
        </>
      ) : (
        <div className='col-span-full'>
          <SellerSetup />
        </div>
      )}
    </>
  );
};
