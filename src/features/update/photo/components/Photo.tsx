import React from 'react';
import { Avatar, AvatarFallback } from '../../../../components/Avatar';
import { Text } from '../../../../components/Text';

interface IPhoto {
  firstName: string;
  lastName: string;
  url: string;
}

export const Photo = ({ firstName, lastName, url }: IPhoto) => {
  return (
    <Avatar
      src={url}
      alt='user'
      className='w-12 h-12'
    >
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
