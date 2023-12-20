import React from 'react';
import { LuSettings } from 'react-icons/lu';
import { Text } from '../../../components/ui/Text';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { Link } from 'react-router-dom';

interface HeaderProps {
  firstName: string;
  lastName: string;
}

export const Header = ({ firstName, lastName }: HeaderProps) => {
  return (
    <div className='sticky top-0 z-10 inline-flex items-center justify-between w-full px-3 py-2 border-b bg-white/50 backdrop-blur border-b-zinc-200'>
      <div className='inline-flex items-center gap-x-2'>
        <Avatar
          src='/assets/images/memoji-05.png'
          alt='user'
        >
          <AvatarFallback>{`${firstName[0]} ${lastName[0]}`}</AvatarFallback>
        </Avatar>
        <Text
          as='p'
          size='sm'
          weight={500}
          className='capitalize'
        >
          {firstName + ' ' + lastName}
        </Text>
      </div>
      <Link to='/app/settings/'>
        <LuSettings className='w-5 h-5 cursor-pointer text-zinc-500 hover:text-primary' />
      </Link>
    </div>
  );
};
