import React from 'react';
import {
  Tab,
  TabList,
  TabTrigger,
  TabContent,
} from '../../../../components/ui/Tab';
import { Description } from './Description';
import { Separator } from '../../../../components/ui/Separator';
import { Reviews } from './Reviews';

interface ProductTabProps {
  description: string;
}

export const ProductTab = ({ description }: ProductTabProps) => {
  return (
    <>
      <Separator className='my-8' />

      <Tab defaultTab='description'>
        <TabList className='w-full mx-auto sm:w-96'>
          <TabTrigger
            value='description'
            className='px-3'
          >
            Description
          </TabTrigger>
          <TabTrigger
            value='reviews'
            className='px-3'
          >
            Reviews
          </TabTrigger>
        </TabList>
        <TabContent value='description'>
          <Description description={description} />
        </TabContent>

        <TabContent value='reviews'>
          <Reviews />
        </TabContent>
      </Tab>
    </>
  );
};
