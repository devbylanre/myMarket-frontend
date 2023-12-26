import React from 'react';
import {
  LuGalleryVerticalEnd,
  LuListMinus,
  LuSettings2,
  LuShoppingCart,
} from 'react-icons/lu';
import { Text } from '../../../components/ui/Text';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { SidebarItem } from '../components/SidebarItem';
import { User } from '../../../contexts/user.types';

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
];

interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
}

const UserDetails = ({ firstName, lastName, email, photo }: UserProps) => {
  return (
    <div className='inline-flex gap-x-3'>
      <Avatar
        src={photo}
        alt='user'
        className='w-9 h-9'
      >
        <AvatarFallback>
          <Text
            as='p'
            size='lg'
          >
            {firstName[0]}
            {lastName[0]}
          </Text>
        </AvatarFallback>
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

export const Sidebar = ({ user }: { user: User }) => {
  return (
    <div className='fixed hidden w-1/6 min-h-screen p-3 space-y-5 lg:block bg-zinc-100'>
      <UserDetails
        email={user.email}
        firstName={user.firstName}
        lastName={user.lastName}
        photo={user.photo.url}
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
