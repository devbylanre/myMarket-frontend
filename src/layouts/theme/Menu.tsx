import React from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Div } from '../../components/Div';
import { Text } from '../../components/Text';
import { Icon } from '../../components/Icon';
import { IconType } from 'react-icons';
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
  LuMinimize2,
  LuLoader,
} from 'react-icons/lu';
import { sortByAlphabet } from '../../utils/sort';

interface LinkProps {
  name: string;
  url: string;
  icon: IconType;
}

const links: LinkProps[] = [
  {
    name: 'Typography',
    url: 'typography',
    icon: LuTextCursor,
  },
  {
    name: 'Button',
    url: 'button',
    icon: LuMousePointerClick,
  },
  {
    name: 'Badge',
    url: 'badge',
    icon: LuLassoSelect,
  },
  {
    name: 'Avatar',
    url: 'avatar',
    icon: LuUser,
  },
  {
    name: 'Accordion',
    url: 'accordion',
    icon: LuChevronsDownUp,
  },
  {
    name: 'Card',
    url: 'card',
    icon: LuActivitySquare,
  },
  {
    name: 'Dropdown',
    url: 'dropdown',
    icon: LuMinimize2,
  },
  {
    name: 'Input',
    url: 'input',
    icon: LuTextCursorInput,
  },
  {
    name: 'Textarea',
    url: 'textarea',
    icon: LuTextQuote,
  },
  {
    name: 'Select',
    url: 'select',
    icon: LuPictureInPicture2,
  },
  {
    name: 'Switch',
    url: 'switch',
    icon: LuToggleLeft,
  },
  {
    name: 'Separator',
    url: 'separator',
    icon: LuAlignVerticalJustifyCenter,
  },
  {
    name: 'Spinner',
    url: 'spinner',
    icon: LuLoader,
  },
  {
    name: 'Checkbox',
    url: 'checkbox',
    icon: LuCheckSquare,
  },
  {
    name: 'Toast',
    url: 'toast',
    icon: LuPictureInPicture,
  },

  {
    name: 'Alert',
    url: 'alert',
    icon: LuUngroup,
  },
];

const Item = ({ link }: { link: LinkProps }) => {
  return (
    <NavLink
      key={link.name}
      to={link.url}
      className={({ isActive }) =>
        twMerge(
          'inline-flex px-2 h-8 gap-x-3 items-center transition-all duration-200 ease-in-out rounded-lg stroke-zinc-500 hover:bg-zinc-50',
          isActive &&
            'bg-white stroke-zinc-800 text-zinc-800 ring-1 ring-zinc-950/5 shadow-sm shadow-zinc-500/10'
        )
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            icon={link.icon}
            color={isActive ? '#000' : '#787878'}
          />
          <Text
            as='p'
            size='sm'
            className={twMerge(isActive && 'font-medium text-zinc-800')}
          >
            {link.name}
          </Text>
        </>
      )}
    </NavLink>
  );
};

export const Menu = () => {
  return (
    <Div
      layout='flex'
      className='flex-col w-full gap-y-1'
    >
      {links
        .sort((a, b) => sortByAlphabet(a.name, b.name))
        .map((link) => (
          <Item
            key={link.name}
            link={link}
          />
        ))}
    </Div>
  );
};
