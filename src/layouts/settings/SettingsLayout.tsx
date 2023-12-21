import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import { PrivateLayout } from '../private/PrivateLayout';

export const SettingsLayout = () => {
  return (
    <PrivateLayout>
      {(user) => (
        <>
          <div className='flex'>
            <Sidebar user={user} />
            <div className='w-full lg:w-[80%] ml-0 lg:ml-[20%] min-h-screen px-3 sm:px-8 pb-5'>
              <Outlet context={user} />
            </div>
          </div>
        </>
      )}
    </PrivateLayout>
  );
};
