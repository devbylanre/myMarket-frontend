import React from 'react';
import { AccordionContent } from '../../../components/ui/Accordion';
import { LuDownloadCloud, LuX } from 'react-icons/lu';
import { Text } from '../../../components/ui/Text';
import { Trigger } from './Trigger';
import { Item } from './Item';

export const Image = () => {
  return (
    <Item value='images'>
      <Trigger
        value='images'
        title='Images'
      />
      <AccordionContent
        value='images'
        className=''
      >
        <div className='flex flex-col items-center gap-y-5'>
          <LuDownloadCloud className='w-10 h-10 p-1 bg-white rounded-full shadow-xl stroke-zinc-300 ring-1 ring-zinc-950/10' />
          <div className='w-4/5 space-y-1 text-center'>
            <Text
              as='h6'
              weight={500}
            >
              Upload your images
            </Text>
            <Text
              as='p'
              size='sm'
              className='text-zinc-500'
            >
              Add your product images, Limit of 5 image per product, Each file
              must not exceed 2 MB
            </Text>
          </div>

          <div className='inline-flex items-start w-full gap-4 justify-evenly'>
            {Array.from('abcde').map((item) => (
              <div
                key={item}
                className='relative w-16 h-16 rounded-md bg-zinc-100'
              >
                <LuX className='absolute w-5 h-5 p-1 rounded-full bg-white/50 backdrop-blur-sm left-1 top-1 stroke-red-500' />
              </div>
            ))}
          </div>
        </div>
      </AccordionContent>
    </Item>
  );
};
