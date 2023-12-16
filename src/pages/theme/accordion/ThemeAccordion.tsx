import React from 'react';
import {
  UtilCard,
  UtilCardCode,
  UtilCardPreview,
  UtilContainer,
  UtilHeader,
  UtilTab,
} from '../Util';
import { Text } from '../../../components/ui/Text';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/Accordion';
import { LuChevronDown } from 'react-icons/lu';

export const ThemeAccordion = () => {
  return (
    <div>
      <UtilHeader>
        <Text as='p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          nihil at aliquam distinctio sapiente est quam provident
        </Text>
      </UtilHeader>

      <Example />
    </div>
  );
};

const accordions = [
  { value: 'first', trigger: 'Is this an accordion?' },
  { value: 'second', trigger: 'Is the accordion collapsible?' },
  { value: 'third', trigger: 'Can I get the source code?' },
];

const Example = () => {
  return (
    <UtilContainer>
      <UtilTab />
      <UtilCard>
        <UtilCardPreview>
          <Accordion
            collapsible
            type='single'
            className='space-y-3'
          >
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    nulla sunt magni aperiam non veritatis dolores, sint eius
                    ipsam voluptatibus? Nemo, suscipit eligendi? Commodi veniam
                    libero blanditiis ab totam alias.
                  </Text>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};
