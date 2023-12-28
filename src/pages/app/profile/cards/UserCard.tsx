import React from 'react';
import { Avatar, AvatarFallback } from '../../../../components/ui/Avatar';
import { Text } from '../../../../components/ui/Text';

interface UserCardProps {
  firstName: string;
  lastName: string;
  photo: {
    name: string;
    url: string;
  };
}

export const UserCard = ({ firstName, lastName, photo }: UserCardProps) => {
  return (
    <div className='flex items-center gap-x-3'>
      <Avatar
        src={photo.url}
        alt={photo.name}
      >
        <AvatarFallback className='font-medium uppercase'>
          {firstName[0]}
        </AvatarFallback>
      </Avatar>
      <Text
        as='h6'
        weight={500}
        className='capitalize'
      >
        {`${firstName} ${lastName}`}
      </Text>
    </div>
  );
};
