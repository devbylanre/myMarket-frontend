import React from 'react';
import { Sidebar } from './dashboard/Sidebar';
import { Header } from './dashboard/Header';
import { Outlet } from 'react-router-dom';
import { OutletSidebar } from './dashboard/OutletSidebar';
import { PrivateLayout } from './PrivateLayout';

export const DashboardLayout = () => {
  return (
    <PrivateLayout>
      <div className='flex'>
        <Sidebar />

        <div className='lg:ml-[16.66%] w-full min-h-screen'>
          <Header />
          <div className='flex'>
            <div className='w-full px-3 sm:px-8 mb-20 mt-5 lg:mt-8 lg:mb-8 mr-0 lg:mr-[30%]'>
              <Outlet />
            </div>

            <OutletSidebar />
          </div>
        </div>
      </div>
    </PrivateLayout>
  );
};
