import React from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Text } from '../../../components/ui/Text';

export const SidebarItem = ({ item }: { item: Record<string, any> }) => {
  return (
    <NavLink
      to={`/app/${item.url}`}
      end
      className={({ isActive }) =>
        twMerge(
          'flex flex-col lg:flex-row lg:h-9 justify-center lg:justify-start items-center w-full hover:text-zinc-950 gap-2 text-zinc-500',
          isActive && 'text-primary'
        )
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={twMerge(
              'fill-zinc-500 stroke-zinc-500',
              isActive && 'fill-primary stroke-none'
            )}
          >
            {item.icon}
          </span>
          <Text
            as='p'
            size='sm'
            weight={500}
            className='text-inherit'
          >
            {item.name}
          </Text>
        </>
      )}
    </NavLink>
  );
};
