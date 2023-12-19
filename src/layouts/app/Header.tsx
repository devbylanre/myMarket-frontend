import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from '../../components/ui/Dropdown';
import { Link } from 'react-router-dom';

// contexts
import { useUserContext } from '../../hooks/useUserContext';

export const Header = () => {
  const { user } = useUserContext()!;

  return (
    <div className='sticky top-0 z-10 inline-flex items-center justify-between w-full px-3 py-2 border-b bg-white/50 backdrop-blur border-b-zinc-200'>
      <Dropdown className='w-64'>
        {(isVisible) => (
          <>
            <DropdownTrigger>
              <div className='inline-flex items-center h-10 pr-2 rounded-full gap-x-2 bg-zinc-100'>
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
                  className='capitalize'
                >
                  {user?.firstName + ' ' + user?.lastName}
                </Text>
                <motion.span
                  animate={isVisible ? { rotate: 180 } : { rotate: 0 }}
                >
                  <LuChevronDown className='w-4 h-4 stroke-zinc-800' />
                </motion.span>
              </div>
            </DropdownTrigger>
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ y: -56, opacity: 0 }}
                  animate={{ y: -42, opacity: 1 }}
                >
                  <DropdownContent>
                    <HeaderDropdown />
                  </DropdownContent>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </Dropdown>

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
      {items.map((item, i) => (
        <Link
          key={i}
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
