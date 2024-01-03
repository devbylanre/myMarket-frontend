import React from 'react';
import { Text } from '../../../../../../components/ui/Text';
import { Link } from 'react-router-dom';
import { Button } from '../../../../../../components/ui/Button';
import { TbVersions } from 'react-icons/tb';
import { Card, CardContent } from '../../../../../../components/ui/Card';

export const EmptyState = () => {
  return (
    <Card className='w-full p-0 mx-auto gap-y-4 sm:w-96 ring-0'>
      <CardContent className='flex flex-col items-center gap-y-3'>
        <TbVersions className='w-8 h-8 text-red-500' />

        <div className='space-y-1 text-center'>
          <Text
            as='h6'
            size='lg'
            weight={500}
          >
            No products available
          </Text>
          <Text
            as='p'
            size='sm'
          >
            We couldn't find any products. Click the button below to upload a
            new product, or contact admin for guides and assistance.
          </Text>
        </div>

        <Button
          type='button'
          variant='outline'
        >
          <Link to='/app/sell'>Create Product</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
