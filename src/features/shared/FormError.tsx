import React from 'react';
import { Alert, AlertDismiss } from '../../components/Alert';
import { LuBadgeAlert, LuX } from 'react-icons/lu';
import { Error } from '../../hooks/types';
import { Text } from '../../components/Text';

interface FormErrorProps {
  error: Error | null;
}

export const FormError = ({ error }: FormErrorProps) => {
  if (!error) return null;

  return (
    <Alert
      variant='warning'
      className='min-w-[100%] gap-x-2'
    >
      <LuBadgeAlert className='w-5 h-5 fill-amber-500 stroke-white' />
      <Text
        as='p'
        size='sm'
        weight={500}
        className='flex-1'
      >
        {Array.isArray(error.message) ? error.message[0].msg : error.message}
      </Text>
      <AlertDismiss>
        <LuX />
      </AlertDismiss>
    </Alert>
  );
};
