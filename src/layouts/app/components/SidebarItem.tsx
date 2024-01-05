import React from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Text } from '../../../components/ui/Text';

export const SidebarItem = ({ item }: { item: Record<string, any> }) => {
  return (
    <NavLink
      to={`/app/${item.url}`}
      className={({ isActive }) =>
        twMerge(
          'flex gap-x-3 items-center h-8 px-2 rounded-lg stroke-zinc-500',
          isActive &&
            'stroke-primary-500 hover:bg-none ring-zinc-950/5 text-primary-500'
        )
      }
    >
      {item.icon}
      <Text
        as='p'
        size='sm'
        weight={500}
        className='text-xs text-inherit sm:text-sm'
      >
        {item.name}
      </Text>
    </NavLink>
  );
};
