import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Tab, TabList, TabTrigger } from '../../../components/ui/Tab';

interface PageTabProps {
  children: React.ReactNode;
}

export const PageTab = ({ children }: PageTabProps) => {
  return (
    <Tab defaultTab='preview'>
      <TabList>
        <TabTrigger value='preview'>Preview</TabTrigger>
        <TabTrigger value='code'>Code</TabTrigger>
      </TabList>
      <Card className='flex ring-0 bg-zinc-100 min-h-[320px] items-center justify-center p-5'>
        {children}
      </Card>
    </Tab>
  );
};
