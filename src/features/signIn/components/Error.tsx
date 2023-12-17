import React from 'react';
import { Alert, AlertContent, AlertIcon } from '../../../components/ui/Alert';
import { Text } from '../../../components/ui/Text';
import { LuRefreshCcw } from 'react-icons/lu';

export const Error = ({ error }: { error: any }) => {
  return (
    <Alert variant='danger'>
      <AlertContent className='inline-flex items-center w-full gap-x-3'>
        <AlertIcon>
          <LuRefreshCcw />
        </AlertIcon>
        <Text
          as='h6'
          weight={500}
          size='sm'
          className='flex-1'
        >
          {Array.isArray(error.details) ? error.details[0].msg : error.message}
        </Text>
      </AlertContent>
    </Alert>
  );
};
