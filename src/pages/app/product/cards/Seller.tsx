import React from 'react';
import { Seller } from '../../../../contexts/product.types';
import { Card } from '../../../../components/ui/Card';
import { Avatar, AvatarFallback } from '../../../../components/ui/Avatar';
import { Text } from '../../../../components/ui/Text';
import { Button } from '../../../../components/ui/Button';

export const SellerInformation = ({
  seller,
}: {
  seller: Seller | undefined;
}) => {
  return (
    <>
      {seller && (
        <Card className='flex items-center p-0 ring-0 gap-x-3'>
          <Avatar
            src={seller.photo.url}
            alt={seller.photo.name}
            className='w-12 h-12'
          >
            <AvatarFallback className='text-lg font-medium'>
              {seller.firstName[0]}
              {seller.lastName[0]}
            </AvatarFallback>
          </Avatar>

          <div className='flex-1'>
            <Text
              as='h6'
              className='capitalize'
            >
              {seller.firstName} {seller.lastName}
            </Text>
            <Text
              as='h6'
              size='sm'
              className='capitalize text-zinc-500'
            >
              {seller.store.name}
            </Text>
          </div>

          <Button
            size='xs'
            variant='outline'
          >
            Browse products
          </Button>
        </Card>
      )}
    </>
  );
};
