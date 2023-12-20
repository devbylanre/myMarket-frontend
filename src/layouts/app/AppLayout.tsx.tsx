import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import { OutletSidebar } from './components/OutletSidebar';
import { PrivateLayout } from '../private/PrivateLayout';

export const AppLayout = () => {
  return (
    <PrivateLayout>
      {(user) => (
        <div className='flex'>
          <div className='fixed bottom-0 left-0 z-50 w-full bg-white lg:border-r lg:p-4 lg:top-0 lg:w-1/6 h-fit lg:h-full lg:border-r-zinc-200'>
            <Sidebar />
          </div>

          <div className='lg:ml-[16.66%] w-full lg:w-[84.44%] min-h-screen'>
            <Header
              firstName={user.firstName}
              lastName={user.lastName}
            />
            <div className='flex'>
              <div className='w-full lg:w-[70%] px-3 sm:px-8 mb-20 mt-5 lg:mt-8 lg:mb-8 mr-0 lg:mr-[25%]'>
                <Outlet context={user} />
              </div>

              <div className='fixed right-0 hidden w-1/4 min-h-screen p-3 bg-white border-l lg:block border-l-zinc-200'>
                <OutletSidebar />
              </div>
            </div>
          </div>
        </div>
      )}
    </PrivateLayout>
  );
};
