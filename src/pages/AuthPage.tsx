import React from 'react';
import { Text } from '../components/Text';
import { Avatar, AvatarFallback } from '../components/Avatar';
import { LuStar } from 'react-icons/lu';
import { EmailAuthContainer } from '../features/auth/email/EmailAuthContainer';
import { Helmet } from 'react-helmet-async';

export const AuthPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign in</title>
      </Helmet>

      <div className='grid min-h-screen grid-cols-1 md:grid-cols-2'>
        <SideBar />

        <div className='flex flex-col items-center md:justify-center'>
          <div className='w-full px-3 my-8 md:w-4/5 lg:w-3/5'>
            <EmailAuthContainer />
          </div>
        </div>
      </div>
    </>
  );
};

const users = [
  { name: 'frank jude', address: 'No. 12 Okpa Street, Benin', reviews: 4.5 },
  {
    name: 'joseph tukay',
    address: '32, Buju street, Lekki phase one, Lagos',
    reviews: 4.8,
  },
  {
    name: 'Dara anuolowapo',
    address: '8, Shonde street, Mokola, Ibadan',
    reviews: 3.7,
  },
];

const SideBar = () => {
  return (
    <div className='flex-col items-center justify-center hidden md:flex bg-zinc-50'>
      <div className='flex flex-col w-3/5 gap-y-8'>
        <div className='space-y-3'>
          {users.map((user, i) => (
            <div
              key={i}
              className='inline-flex gap-x-3 w-fit'
            >
              <Avatar
                src={`/assets/images/memoji-0${i + 1}.png`}
                alt={user.name}
                className='bg-white shadow-xl shadow-zinc-200 h-11 w-11'
              >
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className='flex-1'>
                <div className='inline-flex items-center justify-between w-full gap-x-4'>
                  <Text
                    as='h6'
                    size='sm'
                    weight={600}
                    className='capitalize'
                  >
                    {user.name}
                  </Text>
                  <Text
                    as='p'
                    size='xs'
                    className='inline-flex items-center leading-tight gap-x-1'
                  >
                    <LuStar className='fill-primary stroke-none' />
                    {user.reviews}
                  </Text>
                </div>

                <Text
                  as='p'
                  size='xs'
                >
                  {user.address}
                </Text>
              </div>
            </div>
          ))}
        </div>

        <div className='space-y-2'>
          <Text
            as='h4'
            size='3xl'
            weight={600}
            className='text-primary'
          >
            Trade with real humans, No bots
          </Text>
          <Text as='p'>
            Welcome back, continue supporting local business by promoting or
            buying from their stores
          </Text>
        </div>
      </div>
    </div>
  );
};
