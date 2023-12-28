import React from 'react';
import { Text } from '../../../../components/ui/Text';
import { LuFolderOpen } from 'react-icons/lu';

export const ProductsEmptyState = () => {
  return (
    <div className='flex items-center flex-col gap-y-5 max-w-[400px] mx-auto'>
      <LuFolderOpen className='w-12 h-12 text-zinc-400' />
      <div className='space-y-1 text-center'>
        <Text
          as='h5'
          size='xl'
          weight={500}
        >
          No products found
        </Text>
        <Text
          as='p'
          size='sm'
        >
          Upload a new upload product by clicking on the 'sell' button located
          on the nav menu
        </Text>
      </div>
    </div>
  );
};
