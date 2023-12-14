import React from 'react';
import { AccordionTrigger } from '../../../components/ui/Accordion';
import { Text } from '../../../components/ui/Text';
import { LuChevronDown } from 'react-icons/lu';

interface TriggerProps {
  value: string;
  title: string;
}

export const Trigger = ({ value, title }: TriggerProps) => {
  return (
    <AccordionTrigger
      className='inline-flex items-center justify-between p-2 rounded-md ring-1 ring-zinc-950/10'
      value={value}
    >
      <Text
        as='h6'
        weight={500}
        size='sm'
        className='capitalize'
      >
        {title}
      </Text>
      <LuChevronDown className='w-4 h-4' />
    </AccordionTrigger>
  );
};
