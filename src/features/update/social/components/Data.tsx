import React from 'react';
import { Text } from '../../../../components/Text';
import {
  RiFacebookFill,
  RiGoogleFill,
  RiLink,
  RiTwitterXFill,
  RiWhatsappFill,
} from 'react-icons/ri';

const Platform = ({ platform }: { platform: string }) => {
  const helper = {
    showIcon: (platform: string) => {
      switch (platform) {
        case 'google':
          return <RiGoogleFill />;
        case 'whatsApp':
          return <RiWhatsappFill />;
        case 'twitter':
          return <RiTwitterXFill />;
        case 'facebook':
          return <RiFacebookFill />;
        case 'others':
          return <RiLink />;
        default:
          return null;
      }
    },
  };

  return <>{helper.showIcon(platform)}</>;
};

export const Data = ({ accounts }: { accounts: Record<string, string>[] }) => {
  return (
    <div className='space-y-2'>
      {accounts && accounts.length > 0 ? (
        accounts.map((account, i) => (
          <div
            key={i}
            className='flex items-center gap-x-2 text-zinc-500'
          >
            <Platform platform={account.platform} />
            <Text
              as='p'
              size='sm'
              className='text-zinc-950'
            >
              {account.url}
            </Text>
          </div>
        ))
      ) : (
        <Text
          as='p'
          size='sm'
          className='text-sm'
        >
          Add a social account by clicking edit button
        </Text>
      )}
    </div>
  );
};
