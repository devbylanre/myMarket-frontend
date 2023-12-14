import React from 'react';
import { LuGoal } from 'react-icons/lu';
import { Text } from '../../../components/ui/Text';
import { Button } from '../../../components/ui/Button';

export const Message = ({ onSwitch }: { onSwitch: () => void }) => {
  return (
    <div className='flex flex-col items-center w-3/5 m-auto gap-y-5'>
      <LuGoal className='w-12 h-12 stroke-primary/50' />

      <div className='space-y-1 text-center'>
        <Text
          as='h5'
          weight={500}
          size='2xl'
        >
          Setup a Seller account
        </Text>

        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptates voluptatem, culpa reprehenderit quas excepturi et esse
          error minus eum. Praesentium accusantium
        </Text>
      </div>

      <Button
        type='button'
        onClick={onSwitch}
      >
        Setup a Seller account in 5min
      </Button>
    </div>
  );
};
