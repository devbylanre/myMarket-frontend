import React from 'react';
import { LuBell, LuChevronDown, LuSearch } from 'react-icons/lu';
import { Text } from '../../../components/ui/Text';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { Link } from 'react-router-dom';

interface HeaderProps {
  firstName: string;
  lastName: string;
}

const User = ({ firstName, lastName }: HeaderProps) => {
  return (
    <div className='flex items-center pr-2 rounded-full cursor-pointer gap-x-2 bg-zinc-200'>
      <Avatar
        src='/assets/images/memoji-05.png'
        alt='user-logo'
        className='w-8 h-8'
      >
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <LuChevronDown className='stroke-zinc-500' />
    </div>
  );
};

export const Header = ({ firstName, lastName }: HeaderProps) => {
  const iconClassName =
    'w-5 h-5 bg-white rounded-full text-zinc-500 hover:stroke-zinc-950';

  return (
    <div className='sticky top-0 z-50 flex items-center justify-between h-12 px-3 border-b bg-white/30 backdrop-blur-lg border-b-zinc-200'>
      <Text
        as='h5'
        weight={600}
        size='lg'
      >
        myMarket
      </Text>

      <div className='flex items-center gap-x-5'>
        <LuSearch className={iconClassName} />

        <Link to='/app/settings/'>
          <LuBell className={iconClassName} />
        </Link>
        <User
          firstName={firstName}
          lastName={lastName}
        />
      </div>
    </div>
  );
};
