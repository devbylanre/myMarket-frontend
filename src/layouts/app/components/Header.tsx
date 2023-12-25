import React from 'react';
import { LuSettings } from 'react-icons/lu';
import { Text } from '../../../components/ui/Text';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { Link } from 'react-router-dom';

interface HeaderProps {
  firstName: string;
  lastName: string;
}

const User = ({ firstName, lastName }: HeaderProps) => {
  return (
    <div className='flex items-center gap-x-1.5'>
      <Avatar
        src='/assets/images/memoji-05.png'
        alt='user-logo'
      >
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Text
        as='p'
        weight={500}
        size='sm'
        className='capitalize'
      >
        {`${firstName} ${lastName}`}
      </Text>
    </div>
  );
};

export const Header = ({ firstName, lastName }: HeaderProps) => {
  return (
    <div className='sticky top-0 z-50 flex items-center justify-between h-12 px-3 bg-white/30 backdrop-blur-lg'>
      <Text
        as='h5'
        weight={600}
        size='lg'
      >
        myMarket
      </Text>

      <div className='flex items-center gap-x-3'>
        <Link to='/app/settings/'>
          <LuSettings className='p-1 bg-white rounded-full w-7 h-7 text-zinc-500 hover:text-primary' />
        </Link>
        <User
          firstName={firstName}
          lastName={lastName}
        />
      </div>
    </div>
  );
};
