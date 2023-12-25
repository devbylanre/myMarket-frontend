import React from 'react';
import { Card } from '../../../../components/ui/Card';
import { Text } from '../../../../components/ui/Text';
import { LuGlobe } from 'react-icons/lu';

interface IDataCard {
  billing: Record<string, any>;
}

export const Billing = ({ billing }: IDataCard) => {
  return (
    <Card className='inline-flex items-center p-0 overflow-visible gap-x-3 ring-0'>
      <LuGlobe className='w-8 h-8 p-2 rounded-lg ring-1 ring-zinc-950/10' />
      <div className='w-full'>
        <Text
          as='span'
          size='xs'
        >
          Billing
        </Text>
        <Text
          as='p'
          size='sm'
          weight={500}
        >
          {billing.state
            ? `${billing.address}, ${billing.city}, ${billing.state}, Nigeria`
            : 'No billing information available'}
        </Text>
      </div>
    </Card>
  );
};
