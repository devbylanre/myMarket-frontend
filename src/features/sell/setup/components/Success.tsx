import React from 'react';
import { Text } from '../../../../components/ui/Text';
import { LuPartyPopper } from 'react-icons/lu';
import { Button } from '../../../../components/ui/Button';

export const Success = () => {
  return (
    <div className='flex flex-col items-center gap-y-8'>
      <LuPartyPopper className='w-12 h-12 stroke-primary' />
      <div className='space-y-2 text-center'>
        <Text
          as='h5'
          weight={500}
          size='2xl'
        >
          You are now a Seller
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          numquam quisquam ab dicta quam at sit doloremque ipsa quae
          exercitationem tempore
        </Text>
      </div>
      <Button type='button'>Upload your first product</Button>
    </div>
  );
};
