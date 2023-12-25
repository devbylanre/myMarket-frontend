import React from 'react';
import { SettingsHeader } from '../../../../components/templates/settings/SettingsHeader';
import { Photo } from './Photo';
import { Name } from './Name';
import { Bio } from './Bio';
import { Mobile } from './Mobile';
import { Billing } from './Billing';

export const PersonalPage = () => {
  return (
    <div className='overflow-hidden'>
      <SettingsHeader
        title='Personal Settings'
        highlight='Customize and edit essential user settings data'
      ></SettingsHeader>
      <Photo />
      <Name />
      <Bio />
      <Mobile />
      <Billing />
    </div>
  );
};
