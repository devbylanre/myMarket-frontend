import React from 'react';
import { Card } from '../../../../components/ui/Card';
import { Text } from '../../../../components/ui/Text';
import { LuPhone } from 'react-icons/lu';

interface IMobile {
  mobile: Record<string, any>;
}

export const Mobile = ({ mobile }: IMobile) => {
  return (
    <Card className='inline-flex items-center p-0 overflow-visible gap-x-3 ring-0'>
      <LuPhone className='w-8 h-8 p-2 rounded-lg ring-1 ring-zinc-950/10' />
      <div className='w-full'>
        <Text
          as='span'
          size='xs'
        >
          Mobile number
        </Text>
        <Text
          as='p'
          size='sm'
          weight={500}
        >
          +234 {mobile.number || '**** Not available yet'}
        </Text>
      </div>
    </Card>
  );
};
