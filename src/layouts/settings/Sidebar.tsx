import React from 'react';
import {
  LuAsterisk,
  LuCommand,
  LuCompass,
  LuFileSignature,
  LuHelpingHand,
  LuInspect,
  LuShieldClose,
  LuShoppingCart,
} from 'react-icons/lu';
import { Text } from '../../components/ui/Text';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Avatar, AvatarFallback } from '../../components/ui/Avatar';
import { UserSchema } from '../../utils/types';

interface Item {
  title: string;
  icon: React.ReactNode;
  url: string;
}

const iconClassName: string = 'w-5 h-5';

const items: Item[] = [
  {
    title: 'Personal',
    icon: <LuCommand className={iconClassName} />,
    url: '',
  },
  {
    title: 'Billing',
    icon: <LuCompass className={iconClassName} />,
    url: 'mail',
  },
  {
    title: 'Contact & socials',
    icon: <LuInspect className={iconClassName} />,
    url: 'contact',
  },
  {
    title: 'Store',
    icon: <LuShoppingCart className={iconClassName} />,
    url: 'billing',
  },
  {
    title: 'Privacy',
    icon: <LuShieldClose className={iconClassName} />,
    url: 'billing',
  },
  {
    title: 'Password & security',
    icon: <LuAsterisk className={iconClassName} />,
    url: 'billing',
  },
  {
    title: 'Terms of service',
    icon: <LuFileSignature className={iconClassName} />,
    url: 'billing',
  },
  {
    title: 'Help & support',
    icon: <LuHelpingHand className={iconClassName} />,
    url: 'billing',
  },
];

export const Sidebar = ({ user }: { user: UserSchema }) => {
  return (
    <div className='fixed hidden w-1/5 h-full p-3 space-y-5 lg:block lg:border-r lg:border-r-zinc-200'>
      <div className='inline-flex gap-x-3'>
        <Avatar
          src='/assets/images/memoji-05.png'
          alt='user'
          className='w-9 h-9'
        >
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        <Text
          as='p'
          size='sm'
          className='flex flex-col'
        >
          <span className='capitalize'>
            {`${user.firstName} ${user.lastName}`}
          </span>
          <span className='text-xs text-zinc-500'>{user.email}</span>
        </Text>
      </div>

      <div className='space-y-1.5'>
        {items.map((item) => (
          <NavLink
            to={`/app/settings/${item.url}`}
            key={item.title}
            end
            className={({ isActive }) =>
              twMerge(
                'inline-flex items-center h-9 rounded-md w-full gap-x-4 px-2 text-zinc-600',
                isActive ? 'bg-primary/5 text-primary' : 'hover:bg-zinc-50 '
              )
            }
          >
            {item.icon}
            <Text
              as='p'
              size='sm'
              weight={500}
              className='text-inherit'
            >
              {item.title}
            </Text>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
