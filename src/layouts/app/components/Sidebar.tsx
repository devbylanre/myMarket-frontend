import React from 'react';
import { LuArrowRightLeft, LuBookmark, LuGlobe, LuUser } from 'react-icons/lu';
import { Text } from '../../../components/ui/Text';
import { SidebarItem } from './SidebarItem';

interface Items {
  name: string;
  url?: string;
  icon: React.ReactNode;
}

const items: Items[] = [
  {
    name: 'Explore',
    url: '',
    icon: <LuGlobe className='stroke-inherit fill-inherit' />,
  },
  {
    name: 'Saved',
    url: 'saved',
    icon: <LuBookmark className='stroke-inherit fill-inherit' />,
  },
  {
    name: 'Sell',
    url: 'sell',
    icon: <LuArrowRightLeft className='stroke-inherit fill-inherit' />,
  },
  {
    name: 'Profile',
    url: 'profile',
    icon: <LuUser className='stroke-inherit fill-inherit' />,
  },
];

export const Sidebar = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className='hidden space-y-2 lg:block'>
        <Text
          as='h6'
          weight={600}
        >
          myMarket
        </Text>
      </div>
      <div className='flex gap-2 lg:flex-col'>
        {items.map((item, i) => (
          <SidebarItem
            key={i}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};
