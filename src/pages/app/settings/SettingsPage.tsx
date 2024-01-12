import React from 'react';
import {
  Tab,
  TabContent,
  TabList,
  TabTrigger,
} from '../../../components/ui/Tab';
import { PersonalPage } from './personal/PersonalPage';
import { AccountsPage } from './accounts/AccountsPage';
import { StorePage } from './store/StorePage';
import { AuthenticationPage } from './authentication/AuthenticationPage';

export const SettingsPage = () => {
  return (
    <Tab
      defaultValue='personal'
      className='w-full px-3 mx-auto mt-8 lg:w-11/12 lg:px-0'
    >
      <TabList className='w-full mx-auto sm:w-96'>
        <TabTrigger value='personal'>Personal</TabTrigger>
        <TabTrigger value='accounts'>Accounts</TabTrigger>
        <TabTrigger value='store'>Store</TabTrigger>
        <TabTrigger value='auth'>Auth</TabTrigger>
      </TabList>
      <TabContent value='personal'>
        <PersonalPage />
      </TabContent>
      <TabContent value='accounts'>
        <AccountsPage />
      </TabContent>
      <TabContent value='store'>
        <StorePage />
      </TabContent>
      <TabContent value='auth'>
        <AuthenticationPage />
      </TabContent>
    </Tab>
  );
};
