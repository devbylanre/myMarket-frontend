import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { PrivateLayout } from '../private/PrivateLayout';

export const AppLayout = () => {
  return (
    <PrivateLayout>
      {(user) => (
        <div className='min-h-screen bg-zinc-100'>
          <Header
            firstName={user.firstName}
            lastName={user.lastName}
          />
          <Sidebar />
          <div className='lg:ml-[17%] w-full lg:w-[83%] bg-white min-h-screen lg:rounded-ss-lg p-5'>
            <Outlet context={user} />
          </div>
        </div>
      )}
    </PrivateLayout>
  );
};
