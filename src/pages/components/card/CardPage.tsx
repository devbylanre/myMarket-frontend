import React from 'react';
import { Card, CardContent, CardFooter } from '../../../components/Card';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { Text } from '../../../components/Text';
import { Div } from '../../../components/Div';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import { Button } from '../../../components/Button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../components/Avatar';

export const CardPage = () => {
  return (
    <Div className='space-y-8'>
      <PageHeadline subHeading='Card component' />

      <PageTab>
        <Example />
      </PageTab>
    </Div>
  );
};

const Example = () => {
  return (
    <Div className='space-y-4'>
      <Div className='flex items-center justify-between'>
        <Text
          as='p'
          size='sm'
          weight={500}
        >
          Samsung S10 review
        </Text>

        <Div
          layout='flex'
          className='gap-x-1'
        >
          {Array.from([<TbChevronLeft />, <TbChevronRight />]).map(
            (icon, i) => (
              <Button
                key={i}
                variant='outline'
                size='icon'
                disabled={i === 0}
              >
                {icon}
              </Button>
            )
          )}
        </Div>
      </Div>

      <Card className='space-y-8 rounded-xl ring-1 ring-zinc-950/10'>
        <CardContent>
          <Text
            as='p'
            size='sm'
            weight={500}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            voluptates alias ab labore necessitatibus excepturi quae at, ullam
            impedit cumque quisquam ipsa. Totam, enim. Sit fugit non itaque
            dicta aut?
          </Text>
        </CardContent>

        <CardFooter className='flex gap-x-3'>
          <Avatar className='bg-orange-200'>
            <AvatarImage
              src='/assets/images/memoji-18.png'
              alt='user-one'
            />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>

          <Div>
            <Text
              size='xs'
              weight={600}
            >
              Alphonso James
            </Text>
            <Text size='xs'>September 12, 2023</Text>
          </Div>
        </CardFooter>
      </Card>
    </Div>
  );
};
