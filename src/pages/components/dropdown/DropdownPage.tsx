import React from 'react';
import { Text } from '../../../components/Text';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from '../../../components/Dropdown';
import { Button } from '../../../components/Button';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { Div } from '../../../components/Div';
import { TbCopy, TbPencil, TbShare2, TbUpload } from 'react-icons/tb';

export const DropdownPage = () => {
  return (
    <Div className='space-y-8'>
      <PageHeadline subHeading='Dropdown component' />

      <PageTab>
        <Example />
      </PageTab>
    </Div>
  );
};

interface OptionProps {
  title: string;
  icon: React.ReactNode;
}

const iconClassName = 'w-4 h-4';

const options: OptionProps[] = [
  {
    title: 'edit',
    icon: <TbPencil className={iconClassName} />,
  },
  {
    title: 'copy',
    icon: <TbCopy className={iconClassName} />,
  },
  {
    title: 'share',
    icon: <TbShare2 className={iconClassName} />,
  },
  {
    title: 'download',
    icon: <TbUpload className={iconClassName} />,
  },
];

const Example = () => {
  return (
    <div>
      <Dropdown className='w-56'>
        <DropdownTrigger>
          <Button variant='outline'>Show Dropdown</Button>
        </DropdownTrigger>
        <DropdownContent className='space-y-1'>
          {options.map((option, i) => (
            <DropdownItem
              key={i}
              className='inline-flex items-center w-full h-8 rounded-md gap-x-2 px-1.5 hover:bg-zinc-100 cursor-pointer text-zinc-500'
            >
              {option.icon}
              <Text
                as='h6'
                size='sm'
                className='capitalize'
              >
                {option.title}
              </Text>
            </DropdownItem>
          ))}
        </DropdownContent>
      </Dropdown>
    </div>
  );
};
