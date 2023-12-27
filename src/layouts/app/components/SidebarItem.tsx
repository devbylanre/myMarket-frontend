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
          'flex gap-x-3 justify-between items-center h-9 px-3 rounded-lg',
          isActive &&
            'text-primary lg:bg-white hover:bg-none shadow-sm ring-1 ring-zinc-950/5'
        )
      }
    >
      {({ isActive }) => (
        <>
          <Text
            as='p'
            size='sm'
            weight={500}
            className='text-xs text-inherit sm:text-sm'
          >
            {item.name}
          </Text>
          <span
            className={twMerge(
              'fill-zinc-500',
              isActive && 'fill-primary stroke-none'
            )}
          >
            {item.icon}
          </span>
        </>
      )}
    </NavLink>
  );
};
