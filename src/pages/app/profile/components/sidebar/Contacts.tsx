import React from 'react';
import { Card, CardContent } from '../../../../../components/Card';
import { Text } from '../../../../../components/Text';
import { Separator } from '../../../../../components/Separator';
import { TbSwipe } from 'react-icons/tb';
import { Badge } from '../../../../../components/Badge';
import { User } from '../../../../../contexts/user.types';

interface ContactCardProps {
  data: string | string[];
  message: string;
}

const ContactCard = (props: ContactCardProps) => {
  const { data, message } = props;

  const helper = {
    copyToClipboard: async (data: string | string[]) => {
      return await navigator.clipboard.writeText(data as string);
    },
  };

  return (
    <Card className='p-0 ring-0'>
      <CardContent className='flex items-center gap-x-2'>
        <Badge>
          {data ? data : message}
          {data ? (
            <TbSwipe
              className='w-4 h-4 cursor-pointer stroke-zinc-500 hover:stroke-zinc-950'
              onClick={() => helper.copyToClipboard(data)}
            />
          ) : null}
        </Badge>
      </CardContent>
    </Card>
  );
};

type Keys = 'billing' | 'email' | 'mobile';
type Props = Pick<User, Keys>;

export const Contacts = (props: Props) => {
  const { billing, email, mobile } = props;

  return (
    <>
      <Separator className='my-5' />
      <div className='w-full px-3 space-y-3 lg:px-5'>
        <Text
          as='h6'
          size='sm'
          weight={600}
        >
          Contacts
        </Text>

        <div className='space-y-2'>
          <ContactCard
            data={email}
            message='No email provided'
          />
          <ContactCard
            data={mobile.number > 0 ? `+234 ${mobile.number}` : ''}
            message='No mobile number found'
          />
          <ContactCard
            data={
              Object.values(billing).every((v) => v !== '')
                ? Object.values(billing)
                    .reverse()
                    .map((key) => key)
                    .join(', ')
                : ''
            }
            message='No billing information found'
          />
        </div>
      </div>
    </>
  );
};
