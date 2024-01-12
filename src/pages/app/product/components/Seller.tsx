import React from 'react';
import { Seller } from '../../../../contexts/product.types';
import { Card, CardContent } from '../../../../components/Card';
import { Avatar, AvatarFallback } from '../../../../components/Avatar';
import { Text } from '../../../../components/Text';
import { Button } from '../../../../components/Button';
import { Link } from 'react-router-dom';
import { Separator } from '../../../../components/Separator';

export const SellerInformation = ({ seller }: { seller?: Seller }) => {
  return (
    <>
      {seller ? (
        <>
          <Separator className='my-5' />
          <Card className='p-0 ring-0'>
            <CardContent className='flex items-center gap-x-3'>
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
                  size='sm'
                  weight={500}
                  className='capitalize'
                >
                  Uploaded by {seller.store.name}
                </Text>
                <Text
                  as='h6'
                  size='sm'
                  className='capitalize text-zinc-500'
                >
                  {seller.firstName} {seller.lastName}
                </Text>
              </div>

              <Link to={`/app/profile/${seller._id}`}>
                <Button
                  size='xs'
                  variant='outline'
                >
                  Visit shop
                </Button>
              </Link>
            </CardContent>
          </Card>
        </>
      ) : null}
    </>
  );
};
