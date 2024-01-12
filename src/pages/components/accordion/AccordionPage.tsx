import React from 'react';
import { Text } from '../../../components/Text';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/Accordion';
import { LuChevronDown } from 'react-icons/lu';
import { TabContent } from '../../../components/Tab';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { Div } from '../../../components/Div';

const accordions = [
  { value: 'first', trigger: 'Is this an accordion?' },
  { value: 'second', trigger: 'Is the accordion collapsible?' },
  { value: 'third', trigger: 'Can I get the source code?' },
];

export const AccordionPage = () => {
  return (
    <div className='space-y-8'>
      <PageHeadline subHeading='lorem' />
      <PageTab>
        <TabContent value='preview'>
          <Example />
        </TabContent>
      </PageTab>
    </div>
  );
};

const Example = () => {
  return (
    <Div className='w-96'>
      <Accordion defaultValue={accordions[0].value}>
        {accordions.map((accordion, i) => (
          <AccordionItem
            key={i}
            value={accordion.value}
          >
            <AccordionTrigger
              value={accordion.value}
              className='inline-flex items-center justify-between'
            >
              <Text
                as='h6'
                size='sm'
                weight={500}
              >
                {accordion.trigger}
              </Text>
              <LuChevronDown />
            </AccordionTrigger>
            <AccordionContent value={accordion.value}>
              <Text
                as='p'
                size='sm'
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla
                sunt magni aperiam non veritatis dolores, sint eius ipsam
                voluptatibus? Nemo, suscipit eligendi? Commodi veniam libero
                blanditiis ab totam alias.
              </Text>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Div>
  );
};
