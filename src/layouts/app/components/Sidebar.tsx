import React from 'react';
import {
  RiAppsFill,
  RiArrowLeftRightFill,
  RiPushpinFill,
  RiUser6Fill,
} from 'react-icons/ri';
import { SidebarItem } from './SidebarItem';

interface Items {
  name: string;
  url?: string;
  icon: React.ReactNode;
}

const iconClassName: string = 'w-5 h-5 fill-inherit stroke-inherit';

const items: Items[] = [
  {
    name: 'Shop',
    url: 'shop',
    icon: <RiAppsFill className={iconClassName} />,
  },
  {
    name: 'Saved',
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
    url: 'profile',
    icon: <RiUser6Fill className={iconClassName} />,
  },
];

export const Sidebar = () => {
  return (
    <div className='fixed bottom-0 left-0 z-50 flex justify-between w-full p-3 lg:space-y-2 lg:top-12 lg:h-screen lg:w-1/6 lg:block gap-y-4 bg-zinc-100 lg:bg-inherit'>
      {items.map((item, i) => (
        <SidebarItem
          key={i}
          item={item}
        />
      ))}
    </div>
  );
};
