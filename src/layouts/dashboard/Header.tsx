import React, { useState } from 'react';
import {
  LuChevronDown,
  LuSearch,
  LuBellRing,
  LuPenLine,
  LuActivity,
  LuSettings,
  LuMap,
  LuFolderLock,
} from 'react-icons/lu';
import { Text } from '../../components/ui/Text';
import { Avatar, AvatarFallback } from '../../components/ui/Avatar';
import { Button } from '../../components/ui/Button';
import { Dropdown } from '../../components/ui/Dropdown';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  return (
    <div className='sticky top-0 z-10 inline-flex items-center justify-between w-full px-3 py-2 border-b bg-white/50 backdrop-blur border-b-zinc-200'>
      {/* user */}
      <div className='relative w-64'>
        <Button
          variant='secondary'
          type='button'
          onClick={() => setIsDropdownVisible(!isDropdownVisible)}
          className='relative h-10 px-2 bg-white rounded-full shadow-none gap-x-2 hover:bg-primary/10'
        >
          <Avatar
            src='/assets/images/user.png'
            alt='user'
          >
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Text
            as='p'
            size='sm'
            weight={500}
          >
            John doe
          </Text>
          <LuChevronDown className='w-5 h-5 stroke-zinc-800' />
        </Button>
        <Dropdown
          animate={{ y: [-8, 0] }}
          exit={{ y: [0, -4], opacity: [1, 0] }}
          isVisible={isDropdownVisible}
          className='flex-col gap-y-1'
        >
          <HeaderDropdown />
        </Dropdown>
      </div>

      <div className='inline-flex items-center gap-x-8'>
        <LuSearch className='w-5 h-5' />
        <LuBellRing className='w-5 h-5' />
      </div>
    </div>
  );
};

const items = [
  { icon: <LuPenLine />, title: 'edit profile', url: '' },
  { icon: <LuActivity />, title: 'Activity', url: 'activity' },
  { icon: <LuSettings />, title: 'Manage settings', url: 'settings' },
  { icon: <LuMap />, title: 'Billing', url: 'billing' },
  { icon: <LuFolderLock />, title: 'Privacy', url: 'privacy' },
];

const HeaderDropdown = () => {
  return (
    <>
      {items.map((item) => (
        <Link
          to={`/app/settings/${item.url}`}
          className='inline-flex items-center w-full h-8 px-2 transition-all duration-200 ease-in-out rounded cursor-pointer gap-x-2 hover:bg-zinc-100'
        >
          <span>{item.icon}</span>
          <Text
            as='h6'
            weight={500}
            size='sm'
            className='first-letter:uppercase'
          >
            {item.title}
          </Text>
        </Link>
      ))}
    </>
  );
};
