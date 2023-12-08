import React, { useState } from 'react';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';

export const ThemeAvatar = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <ThemeHeader>
        <Text as='p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          praesentium sint, maxime assumenda delectus nihil sed ex aperiam nulla
          molestias voluptas fugiat aspernatur inventore sit! Reprehenderit
          debitis et animi? Sed!
        </Text>
      </ThemeHeader>

      <Card />
    </div>
  );
};

const Card = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className='flex flex-col space-y-8'>
      <ThemeTab
        tab={tab}
        setTab={setTab}
      />
      <ThemeCard tab={tab}>
        <Avatar
          src='https://github.com/shadcn.png'
          alt='@shadcn'
        >
          <AvatarFallback>
            <Text
              as='p'
              size='xs'
              weight={600}
            >
              CN
            </Text>
          </AvatarFallback>
        </Avatar>
      </ThemeCard>
    </div>
  );
};
