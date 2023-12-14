import React from 'react';
import { Text } from '../components/ui/Text';
import { Avatar, AvatarFallback } from '../components/ui/Avatar';
import { LuStar } from 'react-icons/lu';
import { SignInContainer } from '../features/signIn/SignInContainer';

export const SignInPage = () => {
  return (
    <div className='grid min-h-screen grid-cols-1 md:grid-cols-2'>
      <SideBar />

      <div className='flex flex-col items-center md:justify-center'>
        <div className='w-full px-4 py-8 lg:w-3/5 md:px-0 md:py-16'>
          <SignInContainer />
        </div>
      </div>
    </div>
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
        <div className='relative flex flex-col gap-y-3'>
          {users.map((user, i) => (
            <div
              key={i}
              className='inline-flex p-2 bg-white border shadow-sm rounded-2xl border-primary/25 gap-x-2 w-fit'
            >
              <Avatar
                src={`./assets/images/memoji-0${i + 1}.png`}
                alt={user.name}
                className='bg-white h-11 w-11'
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
                    size='sm'
                    className='inline-flex items-center gap-x-1'
                  >
                    <LuStar className='fill-primary stroke-none' />
                    {user.reviews}
                  </Text>
                </div>

                <Text
                  as='p'
                  size='sm'
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            quia aspernatur hic! Molestiae quia iusto assumenda ducimus debitis
            repellendus laudantium
          </Text>
        </div>
      </div>
    </div>
  );
};
