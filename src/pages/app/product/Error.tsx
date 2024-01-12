import React from 'react';
import { Card, CardContent } from '../../../components/Card';
import { TbCarouselVertical } from 'react-icons/tb';
import { useRouteError } from 'react-router-dom';
import { Text } from '../../../components/Text';

export const ProductPageError = () => {
  const error = useRouteError();

  return (
    <Card className='w-full p-0 mx-auto mt-12 ring-0 sm:w-96'>
      <CardContent className='flex flex-col items-center gap-y-3'>
        <TbCarouselVertical className='w-8 h-8 stroke-zinc-400' />

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
            We are unable to fetch the products from our server. Try refreshing
            the page or contact us for more support.
          </Text>
        </div>
      </CardContent>
    </Card>
  );
};
