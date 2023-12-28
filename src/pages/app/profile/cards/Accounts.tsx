import React from 'react';
import { Text } from '../../../../components/ui/Text';
import { Separator } from '../../../../components/ui/Separator';
import {
  RiFacebookBoxFill,
  RiGoogleFill,
  RiLink,
  RiTwitterXFill,
  RiWhatsappFill,
} from 'react-icons/ri';

interface AccountsProps {
  accounts: Record<string, string>[];
}

const Icon = ({ platform }: { platform: string }) => {
  const helper = {
    render: (platform: string) => {
      switch (platform) {
        case 'google':
          return <RiGoogleFill />;
        case 'whatsApp':
          return <RiWhatsappFill />;
        case 'facebook':
          return <RiFacebookBoxFill />;
        case 'twitter':
          return <RiTwitterXFill />;
        case 'others':
          return <RiLink />;
        default:
          return <RiLink />;
      }
    },
  };

  return <>{helper.render(platform)}</>;
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

        {accounts && accounts.length > 0
          ? accounts.map((account, i) => (
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
          : null}
      </div>
    </>
  );
};
