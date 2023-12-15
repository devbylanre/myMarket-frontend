import React from 'react';
import { Sidebar } from './settings/Sidebar';
import { Outlet } from 'react-router-dom';

export const SettingsLayout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full ml-0 lg:ml-[20%] min-h-screen my-5 px-3 sm:px-10'>
        <Outlet />
      </div>
    </div>
  );
};
