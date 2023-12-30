import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
} from '../ui/Card';
import { Text } from '../ui/Text';
import { Avatar, AvatarFallback } from '../ui/Avatar';
import { LuBookmark, LuStar } from 'react-icons/lu';
import { Badge } from '../ui/Badge';

export const ProductCard = () => {
  return (
    <Card className='relative p-0 cursor-pointer'>
      {/* card header */}
      <Header />

      <Content />

      <Footer />
    </Card>
  );
};

const Header = () => {
  return (
    <CardHeader className='relative inline-flex items-center justify-between p-2'>
      <CardImage
        src='/assets/images/3.jpg'
        alt='product'
        className='w-full h-48'
      />

      <div className='absolute top-0 left-0 inline-flex items-center w-full px-2 py-1.5 bg-white/50 backdrop-blur-sm gap-x-2'>
        <Seller />
        <LuBookmark className='w-4 h-4 stroke-zinc-400 hover:stroke-primary' />
      </div>
    </CardHeader>
  );
};

const Seller = () => {
  return (
    <>
      <Avatar
        src='/assets/images/memoji-05.png'
        alt='Avatar'
      >
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Text
        as='h6'
        weight={500}
        size='sm'
        className='flex-1 capitalize'
      >
        Buju and Co.
      </Text>
    </>
  );
};

const Content = () => {
  return (
    <CardContent className='justify-between p-2'>
      <div className='flex flex-nowrap gap-x-2'>
        <Badge variant='outline'>-15% off</Badge>
        <Badge variant='outline'>Shoes & Sneakers</Badge>
      </div>
      <Badge>
        4.3 <LuStar />
      </Badge>
    </CardContent>
  );
};

const Footer = () => {
  return (
    <CardFooter className='flex-col p-2 space-y-2 border-t border-t-zinc-200'>
      <Text
        as='h6'
        size='sm'
        weight={500}
        className='flex flex-col'
      >
        <span className='capitalize'>buju shanumi sneakers</span>
        <span className='font-semibold'>2,000 NGN</span>
      </Text>
    </CardFooter>
  );
};
