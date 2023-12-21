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
          'inline-flex items-center h-8 rounded-md w-full gap-x-3 px-2 text-zinc-600',
          isActive
            ? 'bg-white text-primary ring-1 ring-zinc-950/5'
            : 'hover:bg-zinc-50 '
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
