import React from 'react';
import { Text } from '../components/ui/Text';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { TbRefreshOff } from 'react-icons/tb';

export const Session = () => {
  return (
    <Card className='w-full p-0 mx-auto mt-12 ring-0 sm:w-96'>
      <CardContent className='flex flex-col items-center gap-y-3'>
        <TbRefreshOff className='w-8 h-8 stroke-zinc-400' />
        <div className='space-y-1 text-center'>
          <Text
            as='h6'
            weight={500}
          >
            Your session has expired
          </Text>
          <Text
            as='p'
            size='sm'
          >
            Your session has expired. Sign in to access your dashboard,
            products, data, and many more
          </Text>
        </div>
        <Button
          size='xs'
          variant='outline'
        >
          <Link to='/auth/'>Go to sign in</Link>
        </Button>
      </CardContent>
    </Card>
  );
};
