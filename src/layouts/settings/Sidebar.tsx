import React from 'react';
import {
  LuBell,
  LuFolderLock,
  LuLock,
  LuMapPin,
  LuPenTool,
  LuPhone,
} from 'react-icons/lu';
import { Text } from '../../components/ui/Text';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Avatar, AvatarFallback } from '../../components/ui/Avatar';

interface Item {
  title: string;
  icon: React.ReactNode;
  url: string;
}

const iconClassName: string = 'w-4 h-4';

const items: Item[] = [
  {
    title: 'Personal & information',
    icon: <LuPenTool className={iconClassName} />,
    url: '',
  },
  {
    title: 'Account',
    icon: <LuBell className={iconClassName} />,
    url: 'mail',
  },
  {
    title: 'Contact & Social accounts',
    icon: <LuPhone className={iconClassName} />,
    url: 'contact',
  },
  {
    title: 'Billing information',
    icon: <LuMapPin className={iconClassName} />,
    url: 'billing',
  },
  {
    title: 'Privacy',
    icon: <LuFolderLock className={iconClassName} />,
    url: 'billing',
  },
  {
    title: 'Password & security',
    icon: <LuLock className={iconClassName} />,
    url: 'billing',
  },
];

export const Sidebar = () => {
  return (
    <div className='fixed hidden w-1/5 h-full p-3 space-y-8 lg:block'>
      <div className='inline-flex gap-x-3'>
        <Avatar
          src='/assets/images/memoji-05.png'
          alt='user'
        >
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        <Text
          as='p'
          size='sm'
          className='flex flex-col'
        >
          <span>Just Tukay</span>
          <span className='text-xs text-zinc-500'>buymeshawarma@gmail.com</span>
        </Text>
      </div>

      <div className='space-y-0.5'>
        {items.map((item) => (
          <NavLink
            to={`/app/settings/${item.url}`}
            key={item.title}
            end
            className={({ isActive }) =>
              twMerge(
                'inline-flex hover:bg-zinc-50 items-center h-9 rounded-md w-full gap-x-3 px-2',
                isActive && 'bg-zinc-100'
              )
            }
          >
            {item.icon}
            <Text
              as='p'
              size='sm'
            >
              {item.title}
            </Text>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
