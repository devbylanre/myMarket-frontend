import React from 'react';
import { Text } from '../../../components/ui/Text';
import {
  Card,
  CardContent,
  CardHeader,
  CardImage,
} from '../../../components/ui/Card';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import {
  UtilCard,
  UtilCardCode,
  UtilCardPreview,
  UtilContainer,
  UtilHeader,
  UtilTab,
} from '../Util';

export const ThemeCardPage = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <UtilHeader>
        <Text as='p'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          dignissimos fugiat ullam recusandae mollitia ipsam nulla aspernatur
        </Text>
      </UtilHeader>

      <Example />
    </div>
  );
};

const Example = () => {
  return (
    <UtilContainer>
      <UtilTab />
      <UtilCard>
        <UtilCardPreview>
          <Card className='relative w-2/3 p-0 rounded-2xl'>
            <CardHeader className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full p-1 text-center gap-y-3 bg-white/50 backdrop-blur-sm'>
              <Avatar
                src='/assets/images/memoji-02.png'
                alt='seller'
                className='w-12 h-12'
              >
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className='space-y-0.5'>
                <Text
                  as='h6'
                  size='sm'
                  weight={600}
                >
                  John Doe
                </Text>
                <Text
                  as='h6'
                  size='sm'
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  earum excepturi
                </Text>
              </div>
            </CardHeader>

            <CardContent>
              <CardImage
                src='/assets/images/3.jpg'
                alt='product'
              />
            </CardContent>
          </Card>
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};
