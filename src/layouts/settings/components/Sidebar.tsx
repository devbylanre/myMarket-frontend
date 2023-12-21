import React from 'react';
import {
  LuAsterisk,
  LuCommand,
  LuHelpingHand,
  LuLink2,
  LuShieldClose,
  LuShoppingCart,
  LuTextQuote,
} from 'react-icons/lu';
import { Text } from '../../../components/ui/Text';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { UserSchema } from '../../../utils/types';
import { SidebarItem } from '../components/SidebarItem';

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
    title: 'Social link',
    icon: <LuLink2 className={iconClassName} />,
    url: 'social',
  },
  {
    title: 'Store',
    icon: <LuShoppingCart className={iconClassName} />,
    url: 'store',
  },
  {
    title: 'Privacy',
    icon: <LuShieldClose className={iconClassName} />,
    url: 'privacy',
  },
  {
    title: 'Security',
    icon: <LuAsterisk className={iconClassName} />,
    url: 'security',
  },
  {
    title: 'Terms & Privacy policy',
    icon: <LuTextQuote className={iconClassName} />,
    url: 'terms',
  },
  {
    title: 'Help & support',
    icon: <LuHelpingHand className={iconClassName} />,
    url: 'help',
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
