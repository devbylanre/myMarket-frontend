import React from 'react';
import { Alert, AlertDismiss } from '../../components/Alert';
import { Error } from '../../hooks/types';
import { Text } from '../../components/Text';
import { Icon } from '../../components/Icon';
import { TbPennantFilled, TbX } from 'react-icons/tb';

interface FormErrorProps {
  error: Error | null;
}

export const FormError = ({ error }: FormErrorProps) => {
  if (!error) return null;

  return (
    <Alert
      variant='warning'
      className='w-full gap-x-3'
    >
      <Icon
        icon={TbPennantFilled}
        size={20}
        color='#fff'
        className='p-0.5 rounded-full bg-amber-500'
      />
      <Text
        as='p'
        size='sm'
        weight={500}
        className='flex-1'
      >
        {Array.isArray(error.message) ? error.message[0].msg : error.message}
      </Text>
      <AlertDismiss>
        <Icon
          icon={TbX}
          size={20}
          color='#000'
        />
      </AlertDismiss>
    </Alert>
  );
};
