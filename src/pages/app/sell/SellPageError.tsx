import React from 'react';
import { Card, CardContent } from '../../../components/Card';
import { Icon } from '../../../components/Icon';
import { Text } from '../../../components/Text';
import { TbFaceIdError } from 'react-icons/tb';

export const SellPageError = () => {
  return (
    <Card className='mx-auto mt-12 sm:w-96'>
      <CardContent className='flex flex-col items-center text-center'>
        <Icon
          icon={TbFaceIdError}
          size={40}
          color='red'
        />
        <Text
          as='h5'
          weight={500}
          className='mt-2'
        >
          Unable to fetch products data
        </Text>
        <Text
          as='p'
          size='sm'
          className='mt-1'
        >
          We couldn't fetch the products data, this might be due to bad network
          connection. Use a strong network connection and try refreshing the
          page.
        </Text>
      </CardContent>
    </Card>
  );
};
