import React, { useState } from 'react';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import { Separator } from '../../../components/ui/Separator';
import { Button } from '../../../components/ui/Button';

export const ThemeSeparator = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <ThemeHeader>
        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nihil!
          Similique quisquam accusamus
        </Text>
      </ThemeHeader>

      <Card />
    </div>
  );
};

const Card = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  return (
    <div className='flex flex-col space-y-8'>
      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        <div className='flex flex-col space-y-5'>
          <div className='flex flex-col space-y-1 w-96'>
            <Text
              as='h6'
              weight={500}
            >
              Testing separator component
            </Text>
            <Text
              as='p'
              size='sm'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              assumenda impedit eos itaque possimus! Ducimus, nam enim?
            </Text>
          </div>
          <Separator />
          <div className='flex'>
            <Button
              variant='outline'
              type='button'
            >
              First name
            </Button>
            <Separator orientation='vertical' />
            <Button
              variant='outline'
              type='button'
            >
              Last name
            </Button>
          </div>
        </div>
      </ThemeCard>
    </div>
  );
};
