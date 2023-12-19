import React from 'react';
import { Sidebar } from './app/Sidebar';
import { Header } from './app/Header';
import { Outlet } from 'react-router-dom';
import { OutletSidebar } from './app/OutletSidebar';
import { PrivateLayout } from './PrivateLayout';

export const AppLayout = () => {
  return (
    <PrivateLayout>
      {(user) => (
        <div className='flex'>
          <Sidebar />

          <div className='lg:ml-[16.66%] w-full min-h-screen'>
            <Header />
            <div className='flex'>
              <div className='w-full px-3 sm:px-8 mb-20 mt-5 lg:mt-8 lg:mb-8 mr-0 lg:mr-[30%]'>
                <Outlet context={user} />
              </div>

              <OutletSidebar />
            </div>
          </div>
        </div>
      )}
    </PrivateLayout>
  );
};
