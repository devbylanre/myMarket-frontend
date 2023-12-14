import React from 'react';
import { Sidebar } from './settings/Sidebar';
import { Outlet } from 'react-router-dom';

export const SettingsLayout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full ml-[20%] min-h-screen bg-zinc-100'>
        <div className='w-full m-auto my-5 md:w-3/4'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
