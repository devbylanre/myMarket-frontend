import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../../../components/Card';
import { Text } from '../../../components/Text';
import { Product } from '../../../contexts/product.types';
import { Link } from 'react-router-dom';
import { Badge } from '../../../components/Badge';
import { twMerge } from 'tailwind-merge';

export const ProductCard = ({ product }: { product: Product }) => {
  const helper = {
    excerpt: (data: string, length: number) => {
      if (data.length > length) {
        return data.slice(0, length) + '...';
      }
      return data.slice(0, length);
    },

    getPrice: (price: number, discount: number) => {
      return price - (price * discount) / 100;
    },
  };

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Link
      to={`/app/shop/product/${product._id}`}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className='p-0 space-y-5 ring-0'>
        <CardHeader className='p-3 space-y-3 rounded-lg bg-primary-50/20'>
          <Badge
            variant='solid'
            className='ring-0 text-primary-800 bg-primary-50/40'
          >
            {product.category}
          </Badge>
          <img
            src={product.images[0].url}
            alt={product.images[0].name}
            className={twMerge(
              'object-contain w-full h-56 rounded-lg scale-95 transition-transform duration-500 ease-in-out',
              isHovered && 'scale-100'
            )}
          />
        </CardHeader>

        <CardContent className='space-y-3'>
          <div className='space-y-1'>
            <Text
              size='xs'
              className='text-green-800'
            >
              Save ₦
              {((product.discount / 100) * product.price).toLocaleString(
                'en-US'
              )}
            </Text>
            <Text size='xs'>From ₦{product.price.toLocaleString('en-US')}</Text>
          </div>
          <Text
            as='h6'
            weight={600}
            size='xs'
          >
            {helper.excerpt(product.title, 28)}
          </Text>
        </CardContent>
      </Card>
    </Link>
  );
};
