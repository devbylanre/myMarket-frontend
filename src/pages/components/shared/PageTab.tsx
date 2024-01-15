import React from 'react';
import { Card, CardContent } from '../../../components/Card';
import { Tab, TabContent, TabList, TabTrigger } from '../../../components/Tab';

interface PageTabProps {
  children: React.ReactNode;
}

export const PageTab = ({ children }: PageTabProps) => {
  return (
    <Tab
      defaultValue='preview'
      className='space-y-4'
    >
      <TabList className='mx-auto sm:w-96'>
        <TabTrigger value='preview'>Preview</TabTrigger>
        <TabTrigger value='code'>Code</TabTrigger>
      </TabList>
      <TabContent value='preview'>
        <Card className='flex ring-zinc-950/10 min-h-[400px] items-center justify-center p-5 ring-1'>
          <CardContent className='flex flex-col items-center w-full mx-auto md:w-96'>
            {children}
          </CardContent>
        </Card>
      </TabContent>
    </Tab>
  );
};
