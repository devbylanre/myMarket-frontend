import React from 'react';
import { Card, CardContent } from '../../../../components/Card';
import { TbMessage2 } from 'react-icons/tb';
import { Text } from '../../../../components/Text';

export const Reviews = () => {
  return (
    <Card className='w-full p-0 mx-auto ring-0 sm:w-96'>
      <CardContent className='flex flex-col items-center gap-y-3'>
        <TbMessage2 className='w-8 h-8 stroke-primary-500' />

        <div className='space-y-1 text-center'>
          <Text
            as='h6'
            weight={500}
          >
            Reviews are coming soon
          </Text>

          <Text
            as='p'
            size='sm'
          >
            Your shopping experience is about to get even better with valuable
            insights from our community. Stay tuned for the unveiling of this
            eagerly awaited feature on our ecommerce app.
          </Text>
        </div>
      </CardContent>
    </Card>
  );
};
