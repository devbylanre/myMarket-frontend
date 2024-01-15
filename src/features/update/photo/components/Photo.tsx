import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../../components/Avatar';
import { Text } from '../../../../components/Text';

interface IPhoto {
  firstName: string;
  lastName: string;
  url: string;
}

export const Photo = ({ firstName, lastName, url }: IPhoto) => {
  return (
    <Avatar className='w-12 h-12'>
      <AvatarImage
        src={url}
        alt='user'
      />
      <AvatarFallback>
        <Text
          as='h6'
          weight={500}
          size='xl'
          className='capitalize'
        >
          {`${firstName[0]}${lastName[0]}`}
        </Text>
      </AvatarFallback>
    </Avatar>
  );
};
