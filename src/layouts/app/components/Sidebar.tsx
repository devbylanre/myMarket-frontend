import React from 'react';
import {
  RiArrowLeftRightFill,
  RiPushpinFill,
  RiSettings2Fill,
  RiShoppingCartFill,
  RiUser6Fill,
} from 'react-icons/ri';
import { SidebarItem } from './SidebarItem';

interface Items {
  name: string;
  url?: string;
  icon: React.ReactNode;
}

const iconClassName: string = 'w-5 h-5 fill-inherit stroke-inherit';

export const Sidebar = ({ id }: { id: string }) => {
  const items: Items[] = [
    {
      name: 'Shop',
      url: 'shop',
      icon: <RiShoppingCartFill className={iconClassName} />,
    },
    {
      name: 'Saved Products',
      url: 'saved',
      icon: <RiPushpinFill className={iconClassName} />,
    },
    {
      name: 'Sell',
      url: 'sell',
      icon: <RiArrowLeftRightFill className={iconClassName} />,
    },
    {
      name: 'Profile',
      url: `profile/${id}`,
      icon: <RiUser6Fill className={iconClassName} />,
    },
    {
      name: 'Settings',
      url: 'settings/',
      icon: <RiSettings2Fill className={iconClassName} />,
    },
  ];

  return (
    <div className='fixed left-0 w-[17%] h-full p-3 space-y-1 bg-zinc-100 hidden lg:block'>
      {items.map((item, i) => (
        <SidebarItem
          key={i}
          item={item}
        />
      ))}
    </div>
  );
};
