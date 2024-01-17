import React from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Div } from '../../../components/Div';
import { Text } from '../../../components/Text';
import {
  TbArrowsDiff,
  TbHammer,
  TbShredder,
  TbMessageCircle,
  TbLineScan,
} from 'react-icons/tb';
import { Icon } from '../../../components/Icon';

const items = [
  { name: 'shop', icon: TbShredder },
  { name: 'sell', icon: TbArrowsDiff },
  { name: 'messages', icon: TbMessageCircle },
  { name: 'profile', icon: TbLineScan },
  { name: 'settings', icon: TbHammer },
];

export const Item = (props: { item: (typeof items)[number]; id: string }) => {
  const { item, id } = props;

  const url = `/app/${item.name === 'profile' ? `profile/${id}` : item.name}`;

  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        twMerge(
          'flex gap-x-2 items-center lg:justify-start justify-center h-12 lg:h-9 px-2 rounded-lg hover:bg-zinc-50 transition-all duration-300 ease-in-out flex-col lg:flex-row w-full'
        )
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            icon={item.icon}
            size={20}
            className={twMerge(
              isActive ? 'stroke-primary-800' : 'stroke-zinc-500'
            )}
          />
          <Text
            as='h6'
            size='sm'
            weight={500}
            className={twMerge(
              'first-letter:capitalize text-zinc-500 leading-4 hidden lg:block',
              isActive && 'text-primary-800'
            )}
          >
            {item.name}
          </Text>
        </>
      )}
    </NavLink>
  );
};

export const Sidebar = ({ id }: { id: string }) => {
  return (
    <Div className='fixed bottom-0 lg:bg-white lg:top-12 left-0 w-full lg:w-[17%] lg:h-full border-r lg:border-r-zinc-200 z-50 bg-slate-100'>
      <Div
        layout='flex'
        className='lg:p-2.5 gap-y-2 lg:flex-col'
      >
        {items.map((item, i) => (
          <Item
            key={i}
            id={id}
            item={item}
          />
        ))}
      </Div>
    </Div>
  );
};
