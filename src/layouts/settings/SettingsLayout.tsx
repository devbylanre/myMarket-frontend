import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import { PrivateLayout } from '../private/PrivateLayout';

export const SettingsLayout = () => {
  return (
    <PrivateLayout>
      {(user) => (
        <div className='flex'>
          <Sidebar user={user} />
          <div className='w-full px-3 sm:px-8 lg:w-[84.44%] min-h-screen lg:ml-[16.66%] pb-5 mx-auto'>
            <Outlet context={user} />
          </div>
        </div>
      )}
    </PrivateLayout>
  );
};
