import React from 'react';
import { Card, CardContent } from '../../../../components/ui/Card';
import { Text } from '../../../../components/ui/Text';
import { Badge } from '../../../../components/ui/Badge';
import { TbStack } from 'react-icons/tb';

interface DetailsProps {
  title: string;
  brand: string;
  model: string;
  tagline: string;
  category: string;
  price: string;
}

export const Details = ({
  title,
  brand,
  model,
  tagline,
  category,
  price,
}: DetailsProps) => {
  return (
    <Card className='p-0 ring-0'>
      <CardContent className='space-y-3'>
        <Badge variant='solid'>
          <TbStack className='w-4 h-4' />
          {category}
        </Badge>

        <Text
          as='h4'
          size='3xl'
          weight={500}
          className='col-span-2 capitalize'
        >
          {title}
        </Text>
        <Text
          as='h5'
          size='2xl'
          weight={600}
          className='inline-flex leading-none gap-x-1'
        >
          <span className='text-xs font-normal text-zinc-500'>NGN</span>
          <span>{price}</span>
        </Text>
        <Text
          as='h6'
          weight={500}
          size='sm'
          className='text-primary-500'
        >
          Manufactured by {brand}
        </Text>

        <Text
          as='p'
          size='sm'
        >
          {tagline}
        </Text>
      </CardContent>
    </Card>
  );
};
