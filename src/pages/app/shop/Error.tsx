import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { useRouteError } from 'react-router-dom';
import { Text } from '../../../components/ui/Text';
import { TbVersions } from 'react-icons/tb';

export const ShopPageError = () => {
  const error = useRouteError();

  return (
    <Card className='w-full p-0 mx-auto mt-16 ring-0 sm:w-96'>
      <CardContent className='flex flex-col items-center gap-y-3'>
        <TbVersions className='w-7 h-7 stroke-zinc-400' />
        <div className='space-y-1 text-center'>
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
            Unable to fetch products due to server error, Try refreshing the
            page, or contact our team for support.
          </Text>
        </div>
      </CardContent>
    </Card>
  );
};
