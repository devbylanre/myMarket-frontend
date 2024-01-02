import React from 'react';
import { SettingsHeader } from '../shared/SettingsHeader';
import { Photo } from './Photo';
import { Name } from './Name';
import { Bio } from './Bio';
import { Mobile } from './Mobile';
import { Billing } from './Billing';
import { Helmet } from 'react-helmet-async';
import { useOutletContext } from 'react-router-dom';
import { User } from '../../../../contexts/user.types';

export const PersonalPage = () => {
  const { firstName, lastName } = useOutletContext() as User;

  return (
    <>
      <Helmet>
        <title>Personal - {`${firstName} ${lastName}`}</title>
      </Helmet>

      <>
        <SettingsHeader
          title='Personal Settings'
          highlight='Customize and edit essential user settings data'
        ></SettingsHeader>
        <Photo />
        <Name />
        <Bio />
        <Mobile />
        <Billing />
      </>
    </>
  );
};
