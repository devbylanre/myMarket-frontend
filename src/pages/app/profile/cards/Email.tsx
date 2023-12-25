import React from 'react';
import { Card } from '../../../../components/ui/Card';
import { Text } from '../../../../components/ui/Text';
import { LuMail } from 'react-icons/lu';

interface IEmail {
  email: string;
}

export const Email = ({ email }: IEmail) => {
  return (
    <Card className='inline-flex items-center p-0 overflow-visible gap-x-3 ring-0'>
      <LuMail className='w-8 h-8 p-2 rounded-lg ring-1 ring-zinc-950/10' />
      <div className='w-full'>
        <Text
          as='span'
          size='xs'
        >
          Email address
        </Text>
        <Text
          as='p'
          size='sm'
          weight={500}
        >
          {email}
        </Text>
      </div>
    </Card>
  );
};
