import React from 'react';
import { Avatar, AvatarFallback } from '../../../../../components/ui/Avatar';
import { Text } from '../../../../../components/ui/Text';
import {
  Card,
  CardContent,
  CardFooter,
} from '../../../../../components/ui/Card';
import { User } from '../../../../../contexts/user.types';

type CounterProps = {
  count: number;
  prefix: string;
};

const Counter = (props: CounterProps) => {
  const { count, prefix } = props;

  return (
    <Text
      as='p'
      size='sm'
      weight={500}
    >
      {count} {prefix}
    </Text>
  );
};

type Props = Pick<User, 'firstName' | 'lastName' | 'email' | 'photo'>;

export const Details = ({ firstName, lastName, email, photo }: Props) => {
  const counts = [
    {
      type: 'followers',
      count: 1234 / 1000,
    },
    {
      type: 'following',
      count: 349,
    },
    {
      type: 'products',
      count: 24,
    },
  ];

  return (
    <Card className='p-0 px-3 space-y-5 ring-0 lg:px-5'>
      <CardContent className='flex flex-col items-center gap-3 lg:flex-row'>
        <Avatar
          src={photo.url}
          alt={photo.name}
          className='w-12 h-12 bg-primary-100 ring-primary-500/10'
        >
          <AvatarFallback className='font-medium uppercase'>
            {firstName[0]}
          </AvatarFallback>
        </Avatar>
        <div className='space-y-0.5 text-center lg:text-left'>
          <Text
            as='h6'
            size='sm'
            weight={500}
            className='capitalize'
          >
            {`${firstName} ${lastName}`}
          </Text>
          <Text
            as='h6'
            size='xs'
          >
            {email}
          </Text>
        </div>
      </CardContent>

      <CardFooter className='flex items-center justify-center gap-x-5 lg:justify-start'>
        {counts.map((count, i) => (
          <Counter
            key={i}
            count={count.count}
            prefix={count.type}
          />
        ))}
      </CardFooter>
    </Card>
  );
};
