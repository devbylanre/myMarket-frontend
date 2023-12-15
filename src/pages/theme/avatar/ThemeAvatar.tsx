import React, { useState } from 'react';
import { Text } from '../../../components/ui/Text';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { UtilHeader } from '../Util';

export const ThemeAvatar = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <UtilHeader>
        <Text as='p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          praesentium sint, maxime assumenda delectus nihil sed ex aperiam nulla
          molestias voluptas fugiat aspernatur inventore sit! Reprehenderit
          debitis et animi? Sed!
        </Text>
      </UtilHeader>
    </div>
  );
};

const Card = () => {
  return;
};
