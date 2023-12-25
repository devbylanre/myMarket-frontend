import React from 'react';
import { SettingsHeader } from '../../../../components/templates/settings/SettingsHeader';
import { useOutletContext } from 'react-router-dom';
import { IUser } from '../../../../utils/types';
import { SellerSetup } from '../../../../components/templates/SellerSetup';
import { StoreName } from './StoreName';
import { StoreDescription } from './StoreDescription';
import { StoreLocation } from './StoreLocation';

export const StorePage = () => {
  const { isSeller } = useOutletContext() as IUser;

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
          <StoreLocation />
        </>
      ) : (
        <div className='col-span-full'>
          <SellerSetup />
        </div>
      )}
    </>
  );
};
