import React from 'react';
import { Card, CardContent } from '../../../../../components/ui/Card';
import { Text } from '../../../../../components/ui/Text';
import { Separator } from '../../../../../components/ui/Separator';
import { TbAt, TbMapBolt, TbPhoneIncoming } from 'react-icons/tb';

interface DetailsProps {
  billing: Record<string, string>;
  email: string;
  mobile: Record<string, any>;
}

const Billing = ({ billing }: { billing: Record<string, string> }) => {
  return (
    <Card className='p-0 ring-0'>
      <CardContent className='flex items-center gap-x-2'>
        <TbMapBolt />

        {billing.state ? (
          <Text
            as='p'
            size='sm'
            className='capitalize'
          >
            {`${billing.address} ${billing.city} ${billing.state} ${billing.country}`}
          </Text>
        ) : (
          <Text
            as='p'
            size='sm'
          >
            No billing information available
          </Text>
        )}
      </CardContent>
    </Card>
  );
};

const Email = ({ email }: { email: string }) => {
  return (
    <Card className='p-0 ring-0'>
      <CardContent className='flex items-center gap-x-2'>
        <TbAt />

        <Text
          as='p'
          size='sm'
        >
          {email}
        </Text>
      </CardContent>
    </Card>
  );
};

const Mobile = ({ mobile }: { mobile: Record<string, any> }) => {
  return (
    <Card className='p-0 ring-0'>
      <CardContent className='flex items-center gap-x-2'>
        <TbPhoneIncoming />

        <Text
          as='p'
          size='sm'
        >
          {mobile.number
            ? `+234 ${mobile.number}`
            : 'Mobile number not available'}
        </Text>
      </CardContent>
    </Card>
  );
};

export const Details = ({ billing, email, mobile }: DetailsProps) => {
  return (
    <>
      <Separator className='my-5' />
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
    </>
  );
};
