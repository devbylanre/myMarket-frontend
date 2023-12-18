import React from 'react';
// icon
import { LuBadgeAlert } from 'react-icons/lu';

// components
import { Text } from '../../../components/ui/Text';
import { Alert, AlertContent, AlertIcon } from '../../../components/ui/Alert';

export const Error = ({ error }: { error: any }) => {
  return (
    <Alert>
      <AlertContent className='flex flex-col gap-y-2'>
        <div className='inline-flex items-center w-full gap-x-2'>
          <AlertIcon>
            <LuBadgeAlert />
          </AlertIcon>
          <Text
            as='h6'
            weight={500}
            size='sm'
            className='flex-1 leading-tight'
          >
            {error.message}
          </Text>
        </div>
        {Array.isArray(error.details) ? (
          <Text className='space-y-1'>
            {error.details.map((error: Record<string, any>, i: number) => (
              <Text
                as='li'
                size='sm'
                key={i}
                className='px-2'
              >
                {error.msg}
              </Text>
            ))}
          </Text>
        ) : null}
      </AlertContent>
    </Alert>
  );
};
