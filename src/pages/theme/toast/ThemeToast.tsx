import React, { useState } from 'react';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import { Toast } from '../../../components/ui/Toast';
import { Button } from '../../../components/ui/Button';

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
          position='top-center'
          variant='warning'
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
        >
          <Text
            as='h6'
            size='sm'
            weight={500}
          >
            Name updated successfully
          </Text>
          <Text
            as='p'
            size='sm'
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            voluptate non architecto
          </Text>
        </Toast>
      </ThemeCard>
    </div>
  );
};
