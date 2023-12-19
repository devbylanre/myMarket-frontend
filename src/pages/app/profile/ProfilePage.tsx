import React from 'react';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';

// ui components
import { Badge } from '../../../components/ui/Badge';
import { Text } from '../../../components/ui/Text';
import { SellerSetup } from '../../../components/templates/SellerSetup';
import { useOutletContext } from 'react-router-dom';
import { UserSchema, UserStoreSchema } from '../../../utils/props';
import { Separator } from '../../../components/ui/Separator';
import { LuClipboard } from 'react-icons/lu';

export const ProfilePage = () => {
  const { firstName, lastName, bio, store, isSeller } =
    useOutletContext() as UserSchema;

  return (
    <div>
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
            className='capitalize'
          >
            {firstName + ' ' + lastName}
          </Text>
          <div>
            <Badge variant='outline'>Biography:</Badge>
            <Text
              as='span'
              size='sm'
              className='ml-1.5'
            >
              {bio || 'No Bio information provided'}
            </Text>
          </div>
        </div>
      </div>

      <Separator className='my-10' />

      {isSeller ? <Store store={store} /> : <SellerSetup />}
    </div>
  );
};

const Store = ({ store }: UserStoreSchema) => {
  return (
    <div className='space-y-5'>
      {/* create tab components for store, products, and analytics */}
      <Text
        as='h5'
        weight={500}
        size='sm'
      >
        Store, Analytics & Products
      </Text>

      <div className='space-y-5'>
        <div className='space-y-1'>
          <Text
            as='h5'
            size='xl'
            weight={600}
          >
            {store.name}
          </Text>
          <Text
            as='p'
            size='sm'
          >
            {store.description}
          </Text>
        </div>
        <div>
          <Location location={store.location} />
        </div>
      </div>
    </div>
  );
};

const Location = ({ location }: { location: Record<string, any> }) => {
  return (
    <div className='w-full space-y-2 sm:w-3/5 lg:w-2/5'>
      <Text
        as='h6'
        size='sm'
      >
        Trading only acceptable in Nigeria
      </Text>

      <Text
        as='h6'
        size='sm'
        className='inline-flex justify-between w-full capitalize'
      >
        <span className='text-zinc-500'>State</span>
        <span>{location.state}</span>
      </Text>

      <Text
        as='h6'
        size='sm'
        className='inline-flex justify-between w-full capitalize'
      >
        <span className='text-zinc-500'>City</span>
        <span>{location.city}</span>
      </Text>

      <Text
        as='h6'
        size='sm'
        className='inline-flex justify-between w-full capitalize'
      >
        <span className='text-zinc-500'>Address</span>
        <span>{location.address}</span>
      </Text>
      <Badge>
        <LuClipboard />
        Copy address information
      </Badge>
    </div>
  );
};
