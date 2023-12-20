import React from 'react';
import { SettingsHeader } from '../../../components/templates/SettingsHeader';
import { Logo } from './personal/Logo';
import { Name } from './personal/Name';
import { Bio } from './personal/Bio';
import { Mobile } from './personal/Mobile';

export const PersonalPage = () => {
  return (
    <>
      <SettingsHeader
        title='Personal Settings'
        highlight='Customize and edit essential user settings data'
      ></SettingsHeader>
      <Logo />
      <Name />
      <Bio />
      <Mobile />
    </>
  );
};
