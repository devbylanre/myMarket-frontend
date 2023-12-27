import React from 'react';
import { Avatar, AvatarFallback } from '../../../../components/ui/Avatar';
import { Text } from '../../../../components/ui/Text';

interface IPhoto {
  firstName: string;
  lastName: string;
  url: string;
}

export const Photo = ({ firstName, lastName, url }: IPhoto) => {
  console.log(url);
  return (
    <Avatar
      src={url}
      alt='user'
      className='w-full h-full'
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
