import React, { useState } from 'react';
import { Text } from '../../../components/Text';
import { Toast, ToastContent } from '../../../components/Toast';
import { Button } from '../../../components/Button';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { TabContent } from '../../../components/Tab';

export const ToastPage = () => {
  return (
    <div className='space-y-8'>
      <PageHeadline subHeading='Toast components' />

      <PageTab>
        <TabContent value='preview'>
          <Example />
        </TabContent>
      </PageTab>
    </div>
  );
};

const Example = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <div>
      <Button
        variant='outline'
        size='xs'
        onClick={() => setShowToast((state) => !state)}
      >
        Show toast
      </Button>
      {showToast && (
        <Toast>
          <ToastContent className='flex items-center gap-x-2'>
            <Text
              as='h6'
              size='sm'
              weight={500}
              className='flex-1 leading-tight'
            >
              User name updated successfully
            </Text>
          </ToastContent>
        </Toast>
      )}
    </div>
  );
};
