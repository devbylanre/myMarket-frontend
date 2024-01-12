import React from 'react';
import { Card, CardContent } from '../../../../components/Card';
import { Text } from '../../../../components/Text';
import { Badge } from '../../../../components/Badge';

interface ImageCardProps {
  image: {
    url: string;
    file: File;
  };
  excerpt: (data: string, length: number) => string;
  toMb: (data: number) => number;
  pop: (name: string) => void;
}

export const ImageCard = ({ image, excerpt, toMb, pop }: ImageCardProps) => {
  return (
    <Card className='p-0 ring-0'>
      <CardContent className='flex items-center justify-between w-full gap-x-3'>
        <img
          src={image.url}
          alt={image.file.name}
          className='object-cover w-10 h-10 rounded-lg ring-1 ring-zinc-950/5'
        />

        <div className='flex-1 space-y-0.5'>
          <Text
            as='h6'
            size='sm'
            weight={500}
            className='first-letter:uppercase'
          >
            {excerpt(image.file.name, 32)}
          </Text>
          <Text
            as='p'
            size='xs'
          >
            {toMb(image.file.size).toFixed(2)} MB
          </Text>
        </div>

        <Badge
          variant='outline'
          className='cursor-pointer'
          onClick={() => pop(image.file.name)}
        >
          Remove
        </Badge>
      </CardContent>
    </Card>
  );
};
