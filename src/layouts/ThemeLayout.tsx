import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Text } from '../components/ui/Text';
import {
  LuTextCursor,
  LuMousePointerClick,
  LuLassoSelect,
  LuTextCursorInput,
  LuTextQuote,
  LuPictureInPicture2,
  LuPictureInPicture,
  LuToggleLeft,
  LuCheckSquare,
  LuUngroup,
  LuAlignVerticalJustifyCenter,
  LuUser,
  LuChevronsDownUp,
  LuActivitySquare,
} from 'react-icons/lu';

export const ThemeLayout = () => {
  return (
    <div className='flex flex-row min-h-screen'>
      {/* sidebar */}
      <div className='fixed bottom-0 w-full bg-zinc-100 md:min-h-screen md:top-0 md:w-2/6 xl:w-1/6'>
        <Sidebar />
      </div>
      {/* content */}
      <div className='ml-0 md:ml-[33.33%] xl:ml-[16.66%] w-full flex flex-col gap-y-8'>
        <Header />
        {/* outlet */}
        <div className='px-4 md:px-8 lg:px-12'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

type MenuItem = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

const iconClassName = 'stroke-inherit';

const menuItems: MenuItem[] = [
  {
    name: 'Typography',
    url: 'typography',
    icon: <LuTextCursor className={iconClassName} />,
  },
  {
    name: 'Button',
    url: 'button',
    icon: <LuMousePointerClick className={iconClassName} />,
  },
  {
    name: 'Badge',
    url: 'badge',
    icon: <LuLassoSelect className={iconClassName} />,
  },
  {
    name: 'Avatar',
    url: 'avatar',
    icon: <LuUser className={iconClassName} />,
  },
  {
    name: 'Accordion',
    url: 'accordion',
    icon: <LuChevronsDownUp className={iconClassName} />,
  },
  {
    name: 'Card',
    url: 'card',
    icon: <LuActivitySquare className={iconClassName} />,
  },
  {
    name: 'Input',
    url: 'input',
    icon: <LuTextCursorInput className={iconClassName} />,
  },
  {
    name: 'Textarea',
    url: 'textarea',
    icon: <LuTextQuote className={iconClassName} />,
  },
  {
    name: 'Select',
    url: 'select',
    icon: <LuPictureInPicture2 className={iconClassName} />,
  },
  {
    name: 'Switch',
    url: 'switch',
    icon: <LuToggleLeft className={iconClassName} />,
  },
  {
    name: 'Separator',
    url: 'separator',
    icon: <LuAlignVerticalJustifyCenter className={iconClassName} />,
  },
  {
    name: 'Checkbox',
    url: 'checkbox',
    icon: <LuCheckSquare className={iconClassName} />,
  },
  {
    name: 'Toast',
    url: 'toast',
    icon: <LuPictureInPicture className={iconClassName} />,
  },
  {
    name: 'Alert',
    url: 'alert',
    icon: <LuUngroup className={iconClassName} />,
  },
];

const Sidebar = () => {
  return (
    <div className='flex flex-col p-5 gap-y-1'>
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.url}
          className={({ isActive }) =>
            twMerge(
              'inline-flex px-2 h-8 gap-x-3 items-center cursor-pointer hover:bg-white transition-all duration-200 ease-in-out rounded-lg stroke-zinc-400 text-zinc-500',
              isActive &&
                'bg-white shadow-sm stroke-zinc-800 text-zinc-800 border border-zinc-200'
            )
          }
        >
          <span>{item.icon}</span>
          <Text
            as='p'
            size='sm'
            className='text-inherit'
          >
            {item.name}
          </Text>
        </NavLink>
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <div className='inline-flex items-center justify-between w-full h-12 px-12 border-b border-b-zinc-200'>
      <div>
        <Text
          as='h5'
          weight={500}
          size='md'
        >
          Mymarket Theme
          <Text
            as='span'
            size='xs'
            className='ml-1'
          >
            v1.0.0
          </Text>
        </Text>
      </div>

      <div></div>
    </div>
  );
};
