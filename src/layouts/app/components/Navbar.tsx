import React from 'react';
import {
  RiArrowLeftRightFill,
  RiPushpinFill,
  RiSettings2Fill,
  RiShoppingCartFill,
  RiUser6Fill,
} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const iconClassName = 'w-5 h-5 fill-inherit';

export const Navbar = ({ id }: { id: string }) => {
  const items = [
    {
      url: '/app/shop/',
      icon: <RiShoppingCartFill className={iconClassName} />,
    },
    {
      url: '/app/pinned/',
      icon: <RiPushpinFill className={iconClassName} />,
    },
    {
      url: '/app/sell/',
      icon: <RiArrowLeftRightFill className={iconClassName} />,
    },
    {
      url: `/app/profile/${id}`,
      icon: <RiUser6Fill className={iconClassName} />,
    },
    {
      url: '/app/settings/',
      icon: <RiSettings2Fill className={iconClassName} />,
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
              'fill-zinc-500 cursor-pointer h-14 w-full flex items-center justify-center hover:fill-zinc-950',
              isActive && 'fill-primary hover:fill-primary'
            )
          }
        >
          {item.icon}
        </NavLink>
      ))}
    </div>
  );
};
