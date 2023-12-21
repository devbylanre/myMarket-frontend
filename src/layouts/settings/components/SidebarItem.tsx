import React from 'react';
import { twMerge } from 'tailwind-merge';
import { NavLink } from 'react-router-dom';
import { Text } from '../../../components/ui/Text';

export const SidebarItem = ({ item }: { item: Record<string, any> }) => {
  return (
    <NavLink
      to={`/app/settings/${item.url}`}
      key={item.title}
      end
      className={({ isActive }) =>
        twMerge(
          'inline-flex items-center h-9 rounded-md w-full gap-x-4 px-2 text-zinc-600',
          isActive ? 'bg-primary/10 text-primary' : 'hover:bg-zinc-50 '
        )
      }
    >
      {item.icon}
      <Text
        as='p'
        size='sm'
        weight={500}
        className='text-inherit'
      >
        {item.title}
      </Text>
    </NavLink>
  );
};
