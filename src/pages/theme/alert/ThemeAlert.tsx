import React, { useState } from 'react';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import { Alert } from '../../../components/ui/Alert';
import { Button } from '../../../components/ui/Button';
import { LuX } from 'react-icons/lu';

export const ThemeAlert = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <ThemeHeader>
        <Text as='p'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet ipsam
          magni saepe soluta, nostrum recusandae facere? Magni consequatur fuga,
          laboriosam nisi
        </Text>
      </ThemeHeader>

      <Card />
    </div>
  );
};

const Card = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);

  return (
    <div className='flex flex-col space-y-8'>
      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        <div className='flex flex-col items-start space-y-3 w-96'>
          <Button
            variant='outline'
            type='button'
            onClick={() => setIsAlertVisible(true)}
          >
            Show alert
          </Button>
          <Alert
            isVisible={isAlertVisible}
            className='items-center justify-between w-full'
          >
            <Text
              as='h6'
              size='sm'
              weight={500}
            >
              Hey! I'm an alert
            </Text>

            <LuX
              onClick={() => setIsAlertVisible(false)}
              className='cursor-pointer stroke-zinc-400 hover:stroke-zinc-800'
            />
          </Alert>
        </div>
      </ThemeCard>
    </div>
  );
};
