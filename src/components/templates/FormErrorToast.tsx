import React, { useState } from 'react';
import { HookError } from '../../utils/types';
import { Toast, ToastContent } from '../ui/Toast';
import { Text } from '../ui/Text';
import { LuAlertCircle } from 'react-icons/lu';

export const FormErrorToast = ({ error }: HookError) => {
  const [showTost, setShowToast] = useState<boolean>(true);
  return (
    <Toast
      isVisible={showTost}
      onDismiss={() => setShowToast(false)}
      variant='danger'
    >
      <ToastContent className='flex items-center gap-x-2'>
        <LuAlertCircle className='w-5 h-5 p-0.5 text-white bg-red-600 rounded-full' />
        <Text
          as='p'
          size='sm'
          accent='danger'
          weight={500}
        >
          {Array.isArray(error?.details)
            ? error?.details[0].msg
            : error?.details || error?.message}
        </Text>
      </ToastContent>
    </Toast>
  );
};
