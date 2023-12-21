import React from 'react';
import { SetupContainer } from '../../../features/sell/setup/SetupContainer';
import { useOutletContext } from 'react-router-dom';
import { UserSchema } from '../../../utils/types';

export const SellerSetupPage = () => {
  const { isSeller } = useOutletContext() as UserSchema;

  return <>{!isSeller && <SetupContainer />}</>;
};
