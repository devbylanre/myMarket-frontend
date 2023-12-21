import React from 'react';
import { AccordionItem } from '../../../../components/ui/Accordion';

interface ItemProps {
  value: string;
  children: React.ReactNode;
}

export const Item = ({ value, children }: ItemProps) => {
  return (
    <AccordionItem
      value={value}
      className='space-y-5'
    >
      {children}
    </AccordionItem>
  );
};
