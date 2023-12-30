import React from 'react';
import { Text } from '../../../components/ui/Text';
import { LuCopyPlus, LuDownload, LuPenLine, LuSend } from 'react-icons/lu';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from '../../../components/ui/Dropdown';
import { Button } from '../../../components/ui/Button';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { TabContent } from '../../../components/ui/Tab';

export const DropdownPage = () => {
  return (
    <div className='space-y-8'>
      <PageHeadline subHeading='Dropdown component' />

      <PageTab>
        <TabContent value='preview'>
          <Example />
        </TabContent>
      </PageTab>
    </div>
  );
};

interface OptionProps {
  title: string;
  icon: React.ReactNode;
}

const options: OptionProps[] = [
  {
    title: 'edit',
    icon: <LuPenLine />,
  },
  {
    title: 'copy',
    icon: <LuCopyPlus />,
  },
  {
    title: 'share',
    icon: <LuSend />,
  },
  {
    title: 'download',
    icon: <LuDownload />,
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
              <span>{option.icon}</span>
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
