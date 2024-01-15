import React from 'react';
import { Div } from '../../components/Div';
import { Menu } from './Menu';

export const Sidebar = () => {
  return (
    <Div className='fixed hidden w-full h-full p-5 space-y-5 bg-white lg:block md:w-3/12 xl:w-1/6 lg:border-r border-r-zinc-200'>
      <Menu />
    </Div>
  );
};
