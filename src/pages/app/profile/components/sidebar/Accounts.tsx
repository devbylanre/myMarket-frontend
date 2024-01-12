import React from 'react';
import { Text } from '../../../../../components/Text';
import { Separator } from '../../../../../components/Separator';
import { Card, CardContent } from '../../../../../components/Card';
import {
  TbBrandFacebook,
  TbBrandGoogleFilled,
  TbBrandTwitter,
  TbBrandWhatsapp,
  TbExternalLink,
  TbPointerCancel,
} from 'react-icons/tb';
import { Badge } from '../../../../../components/Badge';
import { Link } from 'react-router-dom';
import { User } from '../../../../../contexts/user.types';

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

const Account = (props: { platform: string; url: string }) => {
  const { platform, url } = props;
  return (
    <Badge>
      <Icon platform={platform} />
      <Link
        to={url}
        target='_blank'
        className='hover:text-primary-800'
      >
        {url}
      </Link>
    </Badge>
  );
};

export const Accounts = ({ accounts }: Pick<User, 'accounts'>) => {
  return (
    <>
      <Separator className='my-5' />

      <div className='px-3 space-y-3 lg:px-5'>
        <Text
          as='h6'
          size='sm'
          weight={600}
        >
          Social accounts
        </Text>
        <div className='space-y-2'>
          {accounts && accounts.length > 0 ? (
            accounts.map((account, i) => (
              <Account
                key={i}
                platform={account.platform}
                url={account.url}
              />
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </>
  );
};
