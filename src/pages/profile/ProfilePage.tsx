import React from 'react';
import { Avatar, AvatarFallback } from '../../components/ui/Avatar';
import { twMerge } from 'tailwind-merge';
import { LuSettings2 } from 'react-icons/lu';

// ui components
import { Badge } from '../../components/ui/Badge';
import { Text } from '../../components/ui/Text';
import { useUserContext } from '../../hooks/useUserContext';

export const ProfilePage = () => {
  const { user } = useUserContext()!;

  return (
    <div className='space-y-12'>
      <div className='flex flex-col items-center gap-y-3'>
        <Avatar
          src='/assets/images/memoji-05.png'
          alt='user'
          className='w-20 h-20 bg-white shadow-xl'
        >
          <AvatarFallback></AvatarFallback>
        </Avatar>

        <div className='w-full space-y-1 text-center sm:w-2/4'>
          <Text
            as='h5'
            size='xl'
          >
            Just Tukay
          </Text>
          <Text
            as='p'
            size='sm'
          >
            <Badge variant='outline'>Biography:</Badge>
            <span className='ml-1.5'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur consectetur minima beatae, voluptate possimus,
              sapiente dolores ducimus animi in voluptatum vero aperiam ipsam
              facere quaerat quis aliquam voluptatibus
            </span>
          </Text>
        </div>
      </div>

      <Store />
    </div>
  );
};

const Store = () => {
  return (
    <div className='w-full space-y-5'>
      <div className='space-y-1'>
        <Text
          as='h6'
          size='2xl'
        >
          Buju & Co.
        </Text>
        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          suscipit quo itaque fugit eius perferendis praesentium animi quod cum
          quidem! Non praesentium in libero, provident voluptatum accusantium
          similique minima pariatur?
        </Text>
      </div>

      <div className='flex flex-wrap gap-1.5'>
        <Badge variant='soft'>Country: Nigeria</Badge>
        <Badge variant='soft'>State: Lagos</Badge>
        <Badge variant='soft'>City: Ikeja</Badge>
        <Badge variant='soft'>
          Address: No. 10 Buju Bnxn street, Tukay Junction
        </Badge>
      </div>

      <div className='inline-flex items-center justify-between w-full'>
        <div className='inline-flex p-0.5 rounded-md bg-zinc-100 w-fit'>
          {Array.from(['products', 'rankings']).map((tab, i) => (
            <Text
              key={i}
              size='sm'
              weight={500}
              className={twMerge(
                'h-8 px-3 flex items-center justify-center rounded-md text-zinc-500 capitalize cursor-pointer',
                i === 0 && 'bg-white ring-1 ring-zinc-950/10 text-zinc-800'
              )}
            >
              {tab}
            </Text>
          ))}
        </div>

        <Badge>
          <LuSettings2 />
          Store settings
        </Badge>
      </div>
    </div>
  );
};
