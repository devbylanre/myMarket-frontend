import React from 'react';
import { Text } from '../../../../components/ui/Text';
import { UserStore } from '../../../../contexts/user.types';
import { Separator } from '../../../../components/ui/Separator';

const Location = ({ location }: { location: Record<string, any> }) => {
  return (
    <div className='w-full space-y-2'>
      {Object.keys(location)
        .sort((a, b) => {
          return a.toLowerCase().localeCompare(b.toLowerCase());
        })
        .map((key, i) => (
          <Text
            key={i}
            as='p'
            size='sm'
            className='first-letter:uppercase'
          >
            {key}: {location[key]}
          </Text>
        ))}
    </div>
  );
};

export const Store = ({ store }: { store: UserStore }) => {
  return (
    <div className=''>
      {/* create tab components for store, products, and analytics */}

      <div className='space-y-2'>
        <Text
          as='h5'
          size='xl'
          weight={500}
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

      <Separator className='my-5' />

      <Location location={store.location} />
    </div>
  );
};
