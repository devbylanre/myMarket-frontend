import React from 'react';
import {
  TbArrowsDoubleSwNe,
  TbSettingsCheck,
  TbShoppingCart,
  TbUser,
} from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const iconClassName = 'w-5 h-5 stroke-inherit';

export const Navbar = ({ id }: { id: string }) => {
  const items = [
    {
      url: '/app/shop/',
      icon: <TbShoppingCart className={iconClassName} />,
    },
    {
      url: '/app/sell/',
      icon: <TbArrowsDoubleSwNe className={iconClassName} />,
    },
    {
      url: `/app/profile/${id}`,
      icon: <TbUser className={iconClassName} />,
    },
    {
      url: '/app/settings/',
      icon: <TbSettingsCheck className={iconClassName} />,
    },
  ];

  return (
    <div className='fixed bottom-0 z-50 flex items-center justify-around w-full lg:hidden bg-zinc-100'>
      {items.map((item, i) => (
        <NavLink
          key={i}
          to={item.url}
          className={({ isActive }) =>
            twMerge(
              'stroke-zinc-500 cursor-pointer h-14 w-full flex items-center justify-center hover:stroke-zinc-950',
              isActive && 'stroke-primary-500 hover:stroke-primary-700'
            )
          }
        >
          {item.icon}
        </NavLink>
      ))}
    </div>
  );
};
