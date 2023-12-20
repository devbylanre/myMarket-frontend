import React from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Text } from '../../../components/ui/Text';

export const SidebarItem = ({ item }: { item: Record<string, any> }) => {
  return (
    <NavLink
      key={item.name}
      to={`/app/${item.url}`}
      end
      className={({ isActive }) =>
        twMerge(
          'flex flex-col lg:flex-row h-16 lg:h-10 justify-center lg:justify-start items-center w-full lg:px-3 hover:bg-primary/5 gap-2 lg:rounded-full',
          isActive && 'lg:bg-primary/10'
        )
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={twMerge(
              'fill-none stroke-zinc-500',
              isActive && 'stroke-primary'
            )}
          >
            {item.icon}
          </span>
          <Text
            as='p'
            size='sm'
            className={twMerge(
              'text-zinc-500',
              isActive && 'text-primary font-medium'
            )}
          >
            {item.name}
          </Text>
        </>
      )}
    </NavLink>
  );
};
