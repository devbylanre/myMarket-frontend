import React from 'react';

// icons
import { LuAnnoyed } from 'react-icons/lu';

// props types
import { HookError } from '../../utils/types';

// components
import { Badge } from '../ui/Badge';
import { Alert, AlertIcon, AlertContent } from '../ui/Alert';
import { Text } from '../ui/Text';

export const FormErrorAlert = ({ error }: HookError) => {
  return (
    <Alert variant='danger'>
      <AlertContent className='flex flex-col items-center justify-center min-h-[120px] gap-y-3'>
        <AlertIcon>
          <LuAnnoyed className='w-full h-full' />
        </AlertIcon>
        <div className='space-y-1 text-center'>
          <Text
            as='h6'
            size='sm'
            weight={500}
            className='leading-tight text-red-700'
          >
            {error?.message}
          </Text>
          <Badge
            className='py-1.5 bg-white h-fit'
            variant='danger'
          >
            {Array.isArray(error?.details)
              ? error?.details[0].msg
              : error?.details}
          </Badge>
        </div>
      </AlertContent>
    </Alert>
  );
};
