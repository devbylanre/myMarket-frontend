import React from 'react';
import { Card, CardFooter } from '../../../components/ui/Card';
import { Text } from '../../../components/ui/Text';
import { Product } from '../../../contexts/product.types';
import { Link } from 'react-router-dom';

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

  return (
    <Link to={`/app/shop/product/${product._id}`}>
      <Card className='p-2 space-y-1 cursor-pointer'>
        <img
          src='/assets/images/product.jpg'
          alt='product'
          className='object-cover w-full h-48'
        />
        <CardFooter className='flex flex-col'>
          <Text
            as='h6'
            weight={500}
            size='sm'
          >
            {helper.excerpt(product.title, 24)}
          </Text>
          <Text
            as='h6'
            weight={600}
            size='sm'
          >
            NGN {helper.getPrice(product.price, product.discount)}
          </Text>
        </CardFooter>
      </Card>
    </Link>
  );
};
