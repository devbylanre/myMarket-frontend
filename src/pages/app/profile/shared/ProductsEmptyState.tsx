import React from 'react';
import { Text } from '../../../../components/ui/Text';
import { LuGalleryVerticalEnd } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { Button } from '../../../../components/ui/Button';

export const ProductsEmptyState = () => {
  return (
    <div className='flex flex-col items-center mx-auto gap-y-4 max-w-[400px]'>
      <LuGalleryVerticalEnd className='w-8 h-8 text-zinc-950' />
      <div className='space-y-1 text-center'>
        <Text
          as='h5'
          size='xl'
          weight={500}
        >
          No products
        </Text>
        <Text as='p'>
          Create a product to manage your all your products from your dashboard
        </Text>
      </div>
      <Link to='/app/sell'>
        <Button
          type='button'
          variant='outline'
        >
          Create Product
        </Button>
      </Link>
    </div>
  );
};
