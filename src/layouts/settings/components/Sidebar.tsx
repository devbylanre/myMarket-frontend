import React from 'react';
import {
  LuAsterisk,
  LuGalleryVerticalEnd,
  LuListMinus,
  LuSettings2,
  LuShoppingCart,
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

const iconClassName: string = 'w-4 h-4';

const items: Item[] = [
  {
    title: 'Personal',
    icon: <LuListMinus className={iconClassName} />,
    url: '',
  },
  {
    title: 'Accounts',
    icon: <LuGalleryVerticalEnd className={iconClassName} />,
    url: 'social',
  },
  {
    title: 'Store',
    icon: <LuShoppingCart className={iconClassName} />,
    url: 'store',
  },
  {
    title: 'Authentication',
    icon: <LuSettings2 className={iconClassName} />,
    url: 'auth',
  },
  {
    title: 'Security',
    icon: <LuAsterisk className={iconClassName} />,
    url: 'security',
  },
];

interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
}

const User = ({ firstName, lastName, email }: UserProps) => {
  return (
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
        <span className='capitalize'>{`${firstName} ${lastName}`}</span>
        <span className='text-xs text-zinc-500'>{email}</span>
      </Text>
    </div>
  );
};

export const Sidebar = ({ user }: { user: UserSchema }) => {
  return (
    <div className='fixed hidden w-1/6 min-h-screen p-3 space-y-5 lg:block bg-zinc-100'>
      <User
        email={user.email}
        firstName={user.firstName}
        lastName={user.lastName}
      />
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
