import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { PrivateLayout } from '../private/PrivateLayout';

export const AppLayout = () => {
  return (
    <PrivateLayout>
      {(user) => (
        <div className='min-h-screen'>
          <Header
            firstName={user.firstName}
            lastName={user.lastName}
          />
          <Sidebar id={user._id} />
          <div className='lg:w-[83%] lg:ml-[17%] min-h-screen bg-white'>
            <Outlet context={user} />
          </div>
        </div>
      )}
    </PrivateLayout>
  );
};
