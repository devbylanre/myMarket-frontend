import React from 'react';
import { Card } from '../../../../components/ui/Card';
import { Text } from '../../../../components/ui/Text';
import { LuGlobe, LuMail, LuPhone } from 'react-icons/lu';

interface DetailsProps {
  billing: Record<string, string>;
  email: string;
  mobile: Record<string, any>;
}

const Billing = ({ billing }: { billing: Record<string, string> }) => {
  return (
    <Card className='flex items-center p-0 gap-x-3 ring-0'>
      <LuGlobe className='stroke-zinc-500' />

      <Text
        as='p'
        size='sm'
      >
        {billing.state
          ? `${billing.address}, ${billing.city}, ${billing.state}, Nigeria`
          : 'Add billing address'}
      </Text>
    </Card>
  );
};

const Email = ({ email }: { email: string }) => {
  return (
    <Card className='flex items-center p-0 gap-x-3 ring-0'>
      <LuMail className='stroke-zinc-500' />

      <Text
        as='p'
        size='sm'
      >
        {email}
      </Text>
    </Card>
  );
};

const Mobile = ({ mobile }: { mobile: Record<string, any> }) => {
  return (
    <Card className='inline-flex items-center p-0 gap-x-3 ring-0'>
      <LuPhone className='stroke-zinc-500' />

      <Text
        as='p'
        size='sm'
      >
        +234 {mobile.number || '**** Not available'}
      </Text>
    </Card>
  );
};

export const Details = ({ billing, email, mobile }: DetailsProps) => {
  return (
    <div className='w-full space-y-3'>
      <Text
        as='h6'
        size='sm'
        weight={500}
      >
        Details
      </Text>
      <Billing billing={billing} />
      <Email email={email} />
      <Mobile mobile={mobile} />
    </div>
  );
};
