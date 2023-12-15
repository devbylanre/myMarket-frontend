import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Text } from '../../components/ui/Text';
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
} from 'react-icons/lu';

interface MenuItem {
  name: string;
  url: string;
  icon: React.ReactNode;
}

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
    name: 'Dropdown',
    url: 'dropdown',
    icon: <LuMinimize2 className={iconClassName} />,
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
export const Sidebar = () => {
  return (
    <div className='fixed bottom-0 w-full p-5 space-y-5 bg-white md:min-h-screen md:top-0 md:w-2/6 xl:w-1/6 lg:border-r border-r-zinc-200'>
      <div>
        <Text
          as='h6'
          size='sm'
          weight={600}
        >
          myMarket
        </Text>
        <Text
          as='h6'
          size='sm'
        >
          UI component library
        </Text>
      </div>
      <div className='flex flex-col gap-y-1'>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.url}
            className={({ isActive }) =>
              twMerge(
                'inline-flex px-2 h-8 gap-x-3 items-center cursor-pointer transition-all duration-200 ease-in-out rounded-lg stroke-zinc-500 hover:bg-zinc-50',
                isActive &&
                  'bg-white stroke-zinc-800 text-zinc-800 ring-1 ring-zinc-950/5 shadow-lg shadow-zinc-500/10'
              )
            }
          >
            {({ isActive }) => (
              <>
                <span>{item.icon}</span>
                <Text
                  as='p'
                  size='sm'
                  className={twMerge(
                    'text-zinc-500',
                    isActive && 'font-medium text-zinc-800'
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
  );
};
