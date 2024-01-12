import React from 'react';
import { Text } from '../../../../../../components/Text';
import { Separator } from '../../../../../../components/Separator';
import { User, UserStore } from '../../../../../../contexts/user.types';
import { Badge } from '../../../../../../components/Badge';
import { TbMapPinCheck } from 'react-icons/tb';

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
            .map((value, i) => value)
            .join(', ')
        : null}
    </Text>
  );
};

export const Store = ({ store }: Pick<User, 'store'>) => {
  return (
    <>
      <div className='px-3 mx-auto space-y-3 text-center lg:px-5 lg:w-96'>
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

        <Badge>
          <TbMapPinCheck className='w-4 h-4' />
          <Location location={store.location} />
        </Badge>
      </div>

      <Separator className='my-5' />
    </>
  );
};
