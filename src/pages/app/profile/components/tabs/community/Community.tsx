import React from 'react';
import { Card, CardContent } from '../../../../../../components/Card';
import { Avatar, AvatarFallback } from '../../../../../../components/Avatar';
import { Text } from '../../../../../../components/Text';

export const Community = () => {
  return (
    <Card className='w-full p-0 mx-auto ring-0 sm:w-96'>
      <CardContent className='flex flex-col items-center gap-y-3'>
        <div className='grid grid-cols-3 gap-2'>
          {Array.from('abcdef').map((_, i) => (
            <Avatar
              key={i}
              src={`/assets/images/memoji-0${i + 1}.png`}
              alt='community'
              className='w-10 h-10'
            >
              <AvatarFallback>{i}</AvatarFallback>
            </Avatar>
          ))}
        </div>

        <div className='space-y-1 text-center'>
          <Text
            as='h6'
            weight={500}
          >
            Community is coming
          </Text>
          <Text
            as='p'
            size='sm'
          >
            We're introducing a Community Feature soon. Explore, connect, and
            enjoy a more interactive shopping experience on our myMarket. Stay
            tuned for updates!
          </Text>
        </div>
      </CardContent>
    </Card>
  );
};
