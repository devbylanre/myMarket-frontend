import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Card, CardContent } from '../../../components/Card';
import { Text } from '../../../components/Text';
import { TbAccessPointOff } from 'react-icons/tb';

export const ProfilePageError = () => {
  const error = useRouteError();

  return (
    <Card className='w-full p-0 mx-auto mt-16 ring-0 sm:w-96'>
      <CardContent className='flex flex-col items-center text-center gap-y-3'>
        <TbAccessPointOff className='w-7 h-7 stroke-zinc-400' />
        <div className='space-y-1'>
          <Text
            as='h6'
            weight={500}
          >
            {(error as any).message}
          </Text>
          <Text
            as='p'
            size='sm'
          >
            Unable to fetch user data due to server error, Try refreshing the
            page, or contact our team for support.
          </Text>
        </div>
      </CardContent>
    </Card>
  );
};
