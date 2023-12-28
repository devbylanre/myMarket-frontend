import React from 'react';
import { Card, CardContent } from '../../../../components/ui/Card';
import { Text } from '../../../../components/ui/Text';
import { Badge } from '../../../../components/ui/Badge';

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
    <Card className='flex object-cover p-0 overflow-visible rounded-none gap-x-3 ring-0 bg-none'>
      <img
        src={image.url}
        alt={image.file.name}
        className='object-cover w-12 h-12 rounded-lg ring-1 ring-zinc-950/5'
      />
      <CardContent className='flex-1 space-y-1'>
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
      </CardContent>
      <Badge
        variant='outline'
        className='cursor-pointer'
        onClick={() => pop(image.file.name)}
      >
        Remove
      </Badge>
    </Card>
  );
};
