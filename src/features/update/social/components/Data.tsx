import React from 'react';
import { LuLink2, LuLink2Off } from 'react-icons/lu';
import { Text } from '../../../../components/ui/Text';
import { Badge } from '../../../../components/ui/Badge';

export const Data = ({ accounts }: { accounts: Record<string, string>[] }) => {
  return (
    <div>
      {accounts.length > 0 ? (
        <div className='flex flex-col flex-wrap gap-2'>
          {accounts.map((account, i) => (
            <Badge
              key={i}
              variant='outline'
            >
              <LuLink2 className='w-4 h-4' />
              {`${account.platform}: ${account.url}`}
            </Badge>
          ))}
        </div>
      ) : (
        <div className='inline-flex items-center gap-x-2'>
          <LuLink2Off className='w-5 h-5 text-zinc-500' />
          <Text
            as='p'
            size='sm'
            className='text-sm'
          >
            No social account was found
          </Text>
        </div>
      )}
    </div>
  );
};
