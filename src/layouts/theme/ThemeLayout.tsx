import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const ThemeLayout = () => {
  return (
    <div className='flex flex-row min-h-screen'>
      {/* sidebar */}
      <Sidebar />
      {/* content */}
      <div className='ml-0 md:ml-[33.33%] xl:ml-[16.66%] w-full'>
        <Header />
        {/* outlet */}
        <div className='px-3 my-5 lg:my-8 md:px-8 lg:px-12'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
