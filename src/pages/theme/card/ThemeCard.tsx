import React, { useState } from 'react';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import {
  Card,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from '../../../components/ui/Card';
import { LuBookmark } from 'react-icons/lu';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';

export const ThemeCardPage = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <ThemeHeader>
        <Text as='p'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          dignissimos fugiat ullam recusandae mollitia ipsam nulla aspernatur
        </Text>
      </ThemeHeader>

      <ThisCard />
    </div>
  );
};

const ThisCard = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className='flex flex-col space-y-8'>
      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        <Card className='cursor-pointer w-96 hover:shadow-md shadow-zinc-800/5'>
          <CardImage
            src='/assets/images/image.png'
            alt='product'
          />
          <CardHeader className='items-center justify-between py-3'>
            <CardTitle as='h3'>Professional social media designer</CardTitle>
            <span>
              <LuBookmark className='stroke-zinc-400 hover:stroke-zinc-800' />
            </span>
          </CardHeader>
          <CardFooter className='items-center justify-between pt-3 border-t border-t-zinc-200'>
            <div className='inline-flex items-center gap-x-1.5'>
              <Avatar
                src='/assets/images/user.png'
                alt='user'
              >
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Text
                as='h6'
                size='sm'
                weight={500}
              >
                John doe
              </Text>
            </div>
            <Text
              as='h6'
              weight={500}
            >
              40$
            </Text>
          </CardFooter>
        </Card>
      </ThemeCard>
    </div>
  );
};
