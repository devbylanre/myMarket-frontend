import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../components/Avatar';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { Div } from '../../../components/Div';

export const AvatarPage = () => {
  return (
    <div className='flex flex-col space-y-8'>
      <PageHeadline subHeading='An image element designed to show an alternative representation of the user in case the primary image is not available or cannot be loaded.' />

      <PageTab>
        <Example />
      </PageTab>
    </div>
  );
};

interface Image {
  src: string;
  alt: string;
}

const Example = () => {
  const images: Image[] = [
    {
      src: '/assets/images/memoji-05.png',
      alt: 'john doe',
    },
    {
      src: '/assets/images/memoji-12.png',
      alt: 'sam altman',
    },
    {
      src: '/assets/images/hey.png',
      alt: 'joe wilson',
    },
  ];

  return (
    <Div
      layout='flex'
      className='gap-x-4'
    >
      {images.map((image, i) => (
        <Avatar
          key={i}
          size='xl'
        >
          <AvatarImage
            src={image.src}
            alt={image.alt}
          />
          <AvatarFallback className='capitalize'>{image.alt[0]}</AvatarFallback>
        </Avatar>
      ))}
    </Div>
  );
};
