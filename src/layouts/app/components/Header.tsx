import React from 'react';
import { LuBell, LuChevronDown, LuSearch } from 'react-icons/lu';
import { Text } from '../../../components/ui/Text';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from '../../../components/ui/Dropdown';
import {
  RiChat1Fill,
  RiLineChartFill,
  RiLoopRightFill,
  RiSettings2Fill,
} from 'react-icons/ri';
import { Button } from '../../../components/ui/Button';
import { Separator } from '../../../components/ui/Separator';
import { useUserContext } from '../../../hooks/useUserContext';
import { User } from '../../../contexts/user.types';

interface HeaderProps {
  firstName: string;
  lastName: string;
  url: string;
}

const items: {
  name: string;
  icon: React.ReactNode;
  url: string;
}[] = [
  {
    name: 'Edit Profile',
    icon: <RiSettings2Fill />,
    url: '/app/settings/',
  },
  {
    name: 'Analytics',
    icon: <RiLineChartFill />,
    url: '',
  },
  {
    name: 'Customer support',
    icon: <RiChat1Fill />,
    url: '',
  },
];

const Options = ({ firstName, lastName, url }: HeaderProps) => {
  const { dispatch } = useUserContext()!;

  return (
    <Dropdown>
      <DropdownTrigger className='flex items-center pr-2 rounded-full gap-x-2 bg-zinc-200'>
        <Avatar
          src={url}
          alt='user-logo'
          className='w-8 h-8'
        >
          <AvatarFallback className='font-medium capitalize'>{`${firstName[0]}${lastName[0]}`}</AvatarFallback>
        </Avatar>
        <LuChevronDown className='stroke-zinc-500' />
      </DropdownTrigger>
      <DropdownContent className='w-64 mt-2 -left-48'>
        {items.map((item, i) => (
          <DropdownItem key={i}>
            <Link
              to={item.url}
              className='flex items-center h-8 px-2 rounded-lg text-zinc-500 gap-x-2 hover:bg-zinc-100'
            >
              {item.icon}
              <Text
                as='p'
                size='sm'
              >
                {item.name}
              </Text>
            </Link>
          </DropdownItem>
        ))}
        <Separator className='my-2' />
        <Button
          variant='danger'
          type='button'
          onClick={() => dispatch({ type: 'SIGN_OUT', payload: {} as User })}
          className='w-full'
        >
          <RiLoopRightFill />
          Logout
        </Button>
      </DropdownContent>
    </Dropdown>
  );
};

export const Header = ({ firstName, lastName, url }: HeaderProps) => {
  const iconClassName =
    'w-5 h-5 rounded-full text-zinc-500 hover:stroke-primary-500 cursor-pointer';

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
        <LuBell className={iconClassName} />
        <Options
          firstName={firstName}
          lastName={lastName}
          url={url}
        />
      </div>
    </div>
  );
};
