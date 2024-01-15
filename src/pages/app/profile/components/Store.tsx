import React from 'react';
import { Text } from '../../../../components/Text';
import { Separator } from '../../../../components/Separator';
import { User, UserStore } from '../../../../contexts/user.types';
import { TbMapPinCheck } from 'react-icons/tb';
import { Div } from '../../../../components/Div';
import { Icon } from '../../../../components/Icon';

const Location = ({ location }: Pick<UserStore, 'location'>) => {
  return (
    <Text
      as='p'
      size='sm'
      className='capitalize'
      weight={500}
    >
      {Object.values(location).every((v) => v !== '')
        ? Object.values(location)
            .reverse()
            .map((value) => value)
            .join(', ')
        : 'Store location is not available'}
    </Text>
  );
};

export const Store = ({ store }: Pick<User, 'store'>) => {
  return (
    <>
      <Div
        layout='flex'
        className='flex-col items-center px-3 mx-auto mt-5 text-center gap-y-2 sm:w-96'
      >
        <Text
          as='h5'
          size='xl'
          weight={600}
          className='capitalize'
        >
          {store.name}
        </Text>
        <Text
          as='p'
          size='sm'
          className='first-letter:uppercase'
        >
          {store.description}
        </Text>

        <Div
          layout='flex'
          className='items-center gap-x-2'
        >
          <Icon
            icon={TbMapPinCheck}
            className='w-4 h-4'
          />
          <Location location={store.location} />
        </Div>
      </Div>

      <Separator className='my-8' />
    </>
  );
};
