import React, { useState } from 'react';
import { UtilHeader } from '../Util';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { Text } from '../../../components/ui/Text';
import { LuChevronDown } from 'react-icons/lu';
import { Dropdown } from '../../../components/ui/Dropdown';

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
    </div>
  );
};

const Context = () => {
  return;
};
