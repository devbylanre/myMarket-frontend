import React from 'react';
import { Text } from '../../../../../components/ui/Text';
import { Separator } from '../../../../../components/ui/Separator';
import { Card, CardContent } from '../../../../../components/ui/Card';
import {
  TbBrandFacebook,
  TbBrandGoogleFilled,
  TbBrandTwitter,
  TbBrandWhatsapp,
  TbExternalLink,
  TbPointerCancel,
} from 'react-icons/tb';

interface AccountsProps {
  accounts: Record<string, string>[];
}

const Icon = ({ platform }: { platform: string }) => {
  const helper = {
    render: (platform: string) => {
      switch (platform) {
        case 'google':
          return <TbBrandGoogleFilled />;
        case 'whatsApp':
          return <TbBrandWhatsapp />;
        case 'facebook':
          return <TbBrandFacebook />;
        case 'twitter':
          return <TbBrandTwitter />;
        case 'others':
          return <TbExternalLink />;
        default:
          return <TbExternalLink />;
      }
    },
  };

  return <>{helper.render(platform)}</>;
};

const EmptyState = () => {
  return (
    <Card className='p-0 ring-0'>
      <CardContent className='flex flex-col items-center gap-y-3'>
        <TbPointerCancel className='w-8 h-8 stroke-zinc-400' />

        <div className='space-y-1 text-center'>
          <Text
            as='h6'
            weight={500}
          >
            No social account added yet
          </Text>
          <Text
            as='p'
            size='sm'
          >
            No social account link was found in our library.
          </Text>
        </div>
      </CardContent>
    </Card>
  );
};

export const Accounts = ({ accounts }: AccountsProps) => {
  return (
    <>
      <Separator className='my-5' />

      <div className='space-y-3'>
        <Text
          as='h6'
          size='sm'
          weight={500}
        >
          Social accounts
        </Text>
        {accounts && accounts.length > 0 ? (
          accounts.map((account, i) => (
            <div
              key={i}
              className='flex items-center gap-x-2 text-zinc-500'
            >
              <Icon platform={account.platform} />
              <Text
                as='p'
                size='sm'
              >
                {account.url}
              </Text>
            </div>
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </>
  );
};
