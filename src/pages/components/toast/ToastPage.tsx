import React, { useState } from 'react';
import { Text } from '../../../components/Text';
import { Toast, ToastContent } from '../../../components/Toast';
import { Button } from '../../../components/Button';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';

export const ToastPage = () => {
  return (
    <div className='space-y-8'>
      <PageHeadline subHeading='Toast components' />

      <PageTab>
        <Example />
      </PageTab>
    </div>
  );
};

const Example = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <>
      <Button
        variant='outline'
        size='xs'
        onClick={() => setShowToast((state) => !state)}
      >
        Show toast
      </Button>
      {showToast && (
        <Toast position='top-center'>
          <ToastContent>
            <Text
              as='h6'
              size='sm'
              weight={500}
            >
              User name updated successfully
            </Text>
          </ToastContent>
        </Toast>
      )}
    </>
  );
};
