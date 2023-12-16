import React from 'react';
import { Text } from '../../../components/ui/Text';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import {
  UtilCard,
  UtilCardCode,
  UtilCardPreview,
  UtilContainer,
  UtilHeader,
  UtilTab,
} from '../Util';

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

      <UserAvatar />
    </div>
  );
};

const UserAvatar = () => {
  return (
    <UtilContainer>
      <UtilTab />
      <UtilCard>
        <UtilCardPreview>
          <Avatar
            src='/assets/images/memoji-03.png'
            alt='user'
          >
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};
