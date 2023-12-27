import React from 'react';
import { SettingsHeader } from '../../../../components/templates/settings/SettingsHeader';
import { Email } from './Email';
import { Helmet } from 'react-helmet-async';
import { useOutletContext } from 'react-router-dom';
import { User } from '../../../../contexts/user.types';

export const AuthenticationPage = () => {
  const { firstName, lastName } = useOutletContext() as User;

  return (
    <>
      <Helmet>
        <title>Authentication - {`${firstName} ${lastName}`}</title>
      </Helmet>

      <>
        <SettingsHeader
          title='Authentication'
          highlight='Customize your security settings including email and password'
        />
        <Email />
      </>
    </>
  );
};
