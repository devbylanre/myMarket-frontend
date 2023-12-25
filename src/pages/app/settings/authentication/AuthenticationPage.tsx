import React from 'react';
import { SettingsHeader } from '../../../../components/templates/settings/SettingsHeader';
import { Email } from './Email';

export const AuthenticationPage = () => {
  return (
    <>
      <SettingsHeader
        title='Authentication'
        highlight='Customize your security settings including email and password'
      />
      <Email />
    </>
  );
};
