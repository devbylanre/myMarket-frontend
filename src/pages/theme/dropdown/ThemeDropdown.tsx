import React, { useState } from 'react';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { Text } from '../../../components/ui/Text';
import { LuChevronDown } from 'react-icons/lu';
import { Dropdown } from '../../../components/ui/Dropdown';

export const ThemeDropdown = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <ThemeHeader>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, amet
          alias tempore necessitatibus et fuga officia architecto aliquid
          deserunt voluptatibus
        </p>
      </ThemeHeader>

      <Context />
    </div>
  );
};

const Context = () => {
  const [tab, setTab] = useState<'code' | 'preview'>('preview');
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  return (
    <div className='flex flex-col gap-y-8'>
      <ThemeTab
        tab={tab}
        setTab={setTab}
      />
      <ThemeCard tab={tab}>
        <div className='relative inline-flex items-center w-96 gap-x-3'>
          <Avatar
            src='./assets/images/user.png'
            alt='user'
            className='w-9 h-9'
          >
            <AvatarFallback>
              <Text
                as='p'
                size='sm'
                weight={600}
              >
                JD
              </Text>
            </AvatarFallback>
          </Avatar>

          <div>
            <Text
              as='h6'
              size='sm'
              weight={600}
            >
              John Doe
            </Text>
            <Text
              as='p'
              size='xs'
            >
              Thejohndoe@gmail.com
            </Text>
          </div>

          <Dropdown
            isVisible={isDropdownVisible}
            className='flex-col gap-y-1'
          >
            <Text
              as='h6'
              size='sm'
              weight={600}
            >
              Hello christmas
            </Text>
            <Text
              as='p'
              size='sm'
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              reiciendis corporis recusandae possimus qui, error accusantium
              quos aliquam voluptates, dolore quibusdam tempore vel consectetur
              corrupti ducimus eum suscipit? Sed, iusto!
            </Text>
          </Dropdown>

          <LuChevronDown
            className='cursor-pointer'
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
          />
        </div>
      </ThemeCard>
    </div>
  );
};
