import React from 'react';
import { SettingsHeader } from '../shared/SettingsHeader';
import { useOutletContext } from 'react-router-dom';
import { SellerSetup } from '../../../../templates/SellerSetup';
import { StoreName } from './StoreName';
import { StoreDescription } from './StoreDescription';
import { StoreLocation } from './StoreLocation';
import { User } from '../../../../contexts/user.types';
import { Helmet } from 'react-helmet-async';

export const StorePage = () => {
  const { isSeller, store } = useOutletContext() as User;

  return (
    <>
      <Helmet>
        <title>Store - {store.name}</title>
      </Helmet>

      {isSeller ? (
        <>
          <SettingsHeader
            title='Store'
            highlight='Edit or customize your store settings'
          />

          <>
            <StoreName />
            <StoreDescription />
            <StoreLocation />
          </>
        </>
      ) : (
        <SellerSetup />
      )}
    </>
  );
};
