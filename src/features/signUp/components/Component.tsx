import React from 'react';
// components
import { Spinner } from '../../../components/ui/Spinner';
import { Button } from '../../../components/ui/Button';
import { Text } from '../../../components/ui/Text';
import { Fields } from './Fields';

export const Component = ({ isLoading }: { isLoading: boolean | null }) => {
  return (
    <>
      <div className='flex flex-col gap-y-2'>
        <Text
          as='h4'
          weight={600}
          size='3xl'
        >
          Join the community and sell your products
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum labore,
          eaque exercitationem laboriosam doloremque
        </Text>
      </div>

      <Fields />

      <Button
        variant='dark'
        type='submit'
        className='w-full'
        disabled={isLoading!}
      >
        {isLoading ? <Spinner variant='light' /> : 'Join the marketplace'}
      </Button>
    </>
  );
};
