import React, { useState } from 'react';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import { Toast } from '../../../components/ui/Toast';
import { Button } from '../../../components/ui/Button';
import { LuCheck } from 'react-icons/lu';

export const ThemeToast = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <ThemeHeader>
        <Text as='p'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          porro nisi eum mollitia totam doloribus nobis, odit harum impedit
          tenetur unde.
        </Text>
      </ThemeHeader>

      <Context />
    </div>
  );
};

const Context = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='flex flex-col space-y-8'>
      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        <Button
          variant='outline'
          onClick={() => setIsVisible(true)}
        >
          Show toast
        </Button>
        <Toast
          position='bottom-center'
          variant='light'
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
          className='inline-flex items-center rounded-full gap-x-2'
        >
          <LuCheck className='w-5 h-5 p-0.5 bg-green-600 rounded-full stroke-white' />
          <Text
            as='h6'
            size='sm'
            weight={500}
            className='text-green-800'
          >
            Name updated successfully check your profile
          </Text>
        </Toast>
      </ThemeCard>
    </div>
  );
};
