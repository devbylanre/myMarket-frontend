import React from 'react';
import { Card, CardContent } from '../components/Card';
import { Text } from '../components/Text';
import { Div } from '../components/Div';
import { Icon } from '../components/Icon';
import { TbRadarOff } from 'react-icons/tb';
import { Button } from '../components/Button';

interface Props {
  message: string;
  description: string;
  action?: {
    name: string;
    to: string;
  };
}

export const ErrorHandler = (props: Props) => {
  const { message, description, action } = props;

  return (
    <Card className='w-full mx-auto mt-12 sm:w-96'>
      <CardContent className='flex flex-col items-center gap-y-5'>
        <Icon
          icon={TbRadarOff}
          size={32}
          className='text-red-500'
        />

        <Div className='space-y-1 text-center'>
          <Text
            as='h6'
            weight={500}
          >
            {message}
          </Text>
          <Text
            as='p'
            size='sm'
          >
            {description}
          </Text>
        </Div>

        {action?.name ? <Button>{action.name}</Button> : null}
      </CardContent>
    </Card>
  );
};
