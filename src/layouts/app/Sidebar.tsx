import React from 'react';
import { LuArrowRightLeft, LuBookmark, LuGlobe, LuUser } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Text } from '../../components/ui/Text';

interface Items {
  name: string;
  url?: string;
  icon: React.ReactNode;
}

const items: Items[] = [
  {
    name: 'Explore',
    url: '',
    icon: <LuGlobe className='stroke-inherit fill-inherit' />,
  },
  {
    name: 'Saved',
    url: 'saved',
    icon: <LuBookmark className='stroke-inherit fill-inherit' />,
  },
  {
    name: 'Sell',
    url: 'sell',
    icon: <LuArrowRightLeft className='stroke-inherit fill-inherit' />,
  },
  {
    name: 'Profile',
    url: 'profile',
    icon: <LuUser className='stroke-inherit fill-inherit' />,
  },
];

export const Sidebar = () => {
  return (
    <div className='fixed bottom-0 left-0 z-50 w-full bg-white lg:border-r lg:p-4 lg:top-0 lg:w-1/6 h-fit lg:h-full lg:border-r-zinc-200'>
      <div className='flex flex-col gap-y-4'>
        <div className='hidden space-y-2 lg:block'>
          <Text
            as='h6'
            weight={600}
          >
            myMarket
          </Text>
        </div>
        <div className='flex gap-2 lg:flex-col'>
          {items.map((item) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};
