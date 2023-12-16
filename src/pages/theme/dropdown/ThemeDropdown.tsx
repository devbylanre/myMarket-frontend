import React from 'react';
import {
  UtilCard,
  UtilCardCode,
  UtilCardPreview,
  UtilContainer,
  UtilHeader,
  UtilTab,
} from '../Util';
import { Text } from '../../../components/ui/Text';
import {
  LuCopyPlus,
  LuFileLock,
  LuFolderArchive,
  LuPenLine,
} from 'react-icons/lu';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from '../../../components/ui/Dropdown';
import { Button } from '../../../components/ui/Button';

export const ThemeDropdown = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <UtilHeader>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, amet
          alias tempore necessitatibus et fuga officia architecto aliquid
          deserunt voluptatibus
        </p>
      </UtilHeader>

      <Example />
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
    title: 'move',
    icon: <LuFolderArchive />,
  },
  {
    title: 'lock',
    icon: <LuFileLock />,
  },
];

const Example = () => {
  return (
    <UtilContainer>
      <UtilTab />
      <UtilCard>
        <UtilCardPreview>
          <Dropdown className='w-56'>
            <DropdownTrigger>
              <Button variant='outline'>Show Dropdown</Button>
            </DropdownTrigger>
            <DropdownContent className='space-y-1'>
              {options.map((option, i) => (
                <DropdownItem
                  key={i}
                  className='inline-flex items-center w-full h-8 rounded-md gap-x-2 px-1.5 hover:bg-zinc-100 cursor-pointer'
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
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};
