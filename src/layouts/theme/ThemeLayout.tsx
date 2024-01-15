import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Div } from '../../components/Div';

export const ThemeLayout = () => {
  return (
    <Div>
      <Header />
      <Div layout='flex'>
        <Sidebar />
        <Div className='ml-0 lg:ml-[25%] xl:ml-[16.67%] my-8 lg:my-5 w-full'>
          <Div className='w-full px-3 mx-auto lg:px-0 lg:w-5/6 xl:w-4/6'>
            <Outlet />
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
