import React from 'react';
import { Text } from '../../components/Text';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/Avatar';
import { Email } from '../../features/auth/email/Index';
import { Helmet } from 'react-helmet-async';
import { Div } from '../../components/Div';
import { Card, CardContent } from '../../components/Card';

const users = [
  { name: 'frank jude', address: 'No. 12 Okpa Street, Benin' },
  { name: 'joseph tukay', address: '32, Buju street, Lekki phase one, Lagos' },
  { name: 'dara anuolowapo', address: '8, Shonde street, Mokola, Ibadan' },
];

const UserCard = (props: { user: (typeof users)[number]; index: number }) => {
  const { user, index } = props;

  return (
    <Card className='p-0 bg-inherit'>
      <CardContent className='flex items-center gap-x-3'>
        <Avatar size='lg'>
          <AvatarImage
            src={`/assets/images/memoji-0${index + 1}.png`}
            className='bg-orange-200'
          />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>

        <Div className='flex-1'>
          <Text
            as='h6'
            weight={600}
            size='sm'
            className='capitalize'
          >
            {user.name}
          </Text>
          <Text
            as='h6'
            size='xs'
            weight={500}
            className='capitalize'
          >
            {user.address}
          </Text>
        </Div>
      </CardContent>
    </Card>
  );
};

const SideBar = () => {
  return (
    <Div
      layout='hidden'
      className='flex-col items-center justify-center px-5 lg:flex bg-slate-100 basis-2/6'
    >
      <Div className='w-full space-y-5 sm:w-96'>
        {users.map((user, i) => (
          <UserCard
            key={i}
            user={user}
            index={i}
          />
        ))}

        <Div className='space-y-1'>
          <Text
            as='h4'
            size='xl'
            weight={600}
          >
            Trade with humans
          </Text>

          <Text
            as='p'
            size='sm'
          >
            Sell or purchase your product(s) from humans, no more bots
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export const AuthPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign in</title>
      </Helmet>

      <Div
        layout='flex'
        className='w-full h-screen'
      >
        <SideBar />

        <Div
          layout='flex'
          className='flex-1 lg:items-center'
        >
          <Div className='mx-auto w-full sm:w-[480px] mt-8 lg:mt-0 px-3 lg:px-0'>
            <Email />
          </Div>
        </Div>
      </Div>
    </>
  );
};
