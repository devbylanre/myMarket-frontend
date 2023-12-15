import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Text } from '../components/ui/Text';
import { useUserContext } from '../hooks/useUserContext';
import { Sidebar } from './theme/Sidebar';
import { Header } from './theme/Header';

export const ThemeLayout = () => {
  const context = useUserContext();
  console.log(context);

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
