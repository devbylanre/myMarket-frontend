import React from 'react';
import { SidebarItem } from './SidebarItem';
import {
  TbArrowsDoubleSwNe,
  TbSettingsCheck,
  TbShoppingCart,
  TbUser,
} from 'react-icons/tb';

interface Items {
  name: string;
  url?: string;
  icon: React.ReactNode;
}

const iconClassName: string = 'w-5 h-5 stroke-inherit stroke-inherit';

export const Sidebar = ({ id }: { id: string }) => {
  const items: Items[] = [
    {
      name: 'Shop',
      url: 'shop',
      icon: <TbShoppingCart className={iconClassName} />,
    },
    {
      name: 'Sell',
      url: 'sell',
      icon: <TbArrowsDoubleSwNe className={iconClassName} />,
    },
    {
      name: 'Profile',
      url: `profile/${id}`,
      icon: <TbUser className={iconClassName} />,
    },
    {
      name: 'Settings',
      url: 'settings/',
      icon: <TbSettingsCheck className={iconClassName} />,
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
