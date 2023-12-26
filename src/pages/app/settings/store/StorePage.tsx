import React from 'react';
import { SettingsHeader } from '../../../../components/templates/settings/SettingsHeader';
import { useOutletContext } from 'react-router-dom';
import { SellerSetup } from '../../../../components/templates/SellerSetup';
import { StoreName } from './StoreName';
import { StoreDescription } from './StoreDescription';
import { StoreLocation } from './StoreLocation';
import { User } from '../../../../contexts/user.types';

export const StorePage = () => {
  const { isSeller } = useOutletContext() as User;

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
