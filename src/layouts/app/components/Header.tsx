import React from 'react';
import { Text } from '../../../components/Text';
import { Avatar, AvatarFallback } from '../../../components/Avatar';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from '../../../components/Dropdown';
import { Button } from '../../../components/Button';
import { Separator } from '../../../components/Separator';
import { useUserContext } from '../../../hooks/useUserContext';
import { User } from '../../../contexts/user.types';
import {
  TbBellRinging,
  TbChartLine,
  TbChevronDown,
  TbMessage,
  TbRoadOff,
  TbSearch,
  TbUser,
} from 'react-icons/tb';

interface HeaderProps {
  firstName: string;
  lastName: string;
  url: string;
}

interface Item {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const iconClassName = 'w-[18px] h-[18px] stroke-zinc-500';

const items: Item[] = [
  {
    name: 'Edit Profile',
    icon: <TbUser className={iconClassName} />,
    url: '/app/settings/',
  },
  {
    name: 'Analytics',
    icon: <TbChartLine className={iconClassName} />,
    url: '',
  },
  {
    name: 'Customer support',
    icon: <TbMessage className={iconClassName} />,
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
        <TbChevronDown className='stroke-zinc-500' />
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
                weight={500}
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
          size='sm'
          onClick={() => dispatch({ type: 'SIGN_OUT', payload: {} as User })}
          className='w-full'
        >
          <TbRoadOff className='w-[18px] h-[18px]' />
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
        <TbSearch className={iconClassName} />
        <TbBellRinging className={iconClassName} />
        <Options
          firstName={firstName}
          lastName={lastName}
          url={url}
        />
      </div>
    </div>
  );
};
