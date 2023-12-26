import React from 'react';
import {
  Tab,
  TabList,
  TabTrigger,
  TabContent,
} from '../../../components/ui/Tab';
import { Description } from './Description';

interface ProductTabProps {
  description: string;
}

export const ProductTab = ({ description }: ProductTabProps) => {
  return (
    <Tab defaultTab='description'>
      <TabList>
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
    </Tab>
  );
};
