import React, { useState } from 'react';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from '../../../components/ui/Accordion';
import { LuChevronDown } from 'react-icons/lu';

export const ThemeAccordion = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <ThemeHeader>
        <Text as='p'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quas
          obcaecati perspiciatis in incidunt, repudiandae debitis, qui rerum
          doloribus consectetur assumenda fugit.
        </Text>
      </ThemeHeader>

      <Card />
    </div>
  );
};

const Card = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [isAccordionVisible, setIsAccordionVisible] = useState<boolean>(false);

  return (
    <div className='flex flex-col space-y-8'>
      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        <Accordion className='border-b w-96 border-b-zinc-200'>
          <AccordionTrigger
            onToggle={() => setIsAccordionVisible(!isAccordionVisible)}
          >
            <Text
              as='h6'
              size='sm'
              weight={500}
            >
              Is it accessible
            </Text>
            <LuChevronDown />
          </AccordionTrigger>
          <AccordionContent isVisible={isAccordionVisible}>
            <Text
              as='p'
              size='sm'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              ratione quibusdam officia, mollitia voluptas eius architecto
              adipisci et sequi, deleniti officiis neque, magni minima
              accusantium veritatis minus ex! Cumque, corporis?
            </Text>
          </AccordionContent>
        </Accordion>
      </ThemeCard>
    </div>
  );
};
