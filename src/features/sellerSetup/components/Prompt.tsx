import React from 'react';
import { LuComponent } from 'react-icons/lu';
import { Text } from '../../../components/ui/Text';
import { Button } from '../../../components/ui/Button';

export const Prompt = ({ onSwitch }: { onSwitch: () => void }) => {
  return (
    <div className='flex flex-col items-center gap-y-5'>
      <LuComponent className='w-12 h-12 stroke-primary' />

      <div className='space-y-1 text-center'>
        <Text
          as='h5'
          weight={500}
          size='2xl'
        >
          Setup a Seller account
        </Text>

        <Text as='p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptates voluptatem, culpa reprehenderit quas excepturi et esse
          error minus eum. Praesentium accusantium
        </Text>
      </div>

      <Button
        type='button'
        onClick={onSwitch}
      >
        Setup a Seller account in 3min
      </Button>
    </div>
  );
};
