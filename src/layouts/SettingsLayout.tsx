import React from 'react';
import { Sidebar } from './settings/Sidebar';
import { Outlet } from 'react-router-dom';
import { PrivateLayout } from './PrivateLayout';

export const SettingsLayout = () => {
  return (
    <PrivateLayout>
      {(user) => (
        <>
          <div className='flex'>
            <Sidebar user={user} />
            <div className='w-full ml-0 lg:ml-[20%] min-h-screen px-3 sm:px-8'>
              <Outlet context={user} />
            </div>
          </div>
        </>
      )}
    </PrivateLayout>
  );
};
