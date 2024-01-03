import React from 'react';
import { Avatar, AvatarFallback } from '../../../../../components/ui/Avatar';
import { Text } from '../../../../../components/ui/Text';
import { Card, CardContent } from '../../../../../components/ui/Card';

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
    <Card className='p-0 ring-0'>
      <CardContent className='flex flex-col items-center text-center gap-y-2'>
        <Avatar
          src={photo.url}
          alt={photo.name}
          className='w-12 h-12'
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
      </CardContent>
    </Card>
  );
};
