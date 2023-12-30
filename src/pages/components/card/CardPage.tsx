import React from 'react';
import { Card, CardHeader } from '../../../components/ui/Card';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { TabContent } from '../../../components/ui/Tab';

export const CardPage = () => {
  return (
    <div className='space-y-8'>
      <PageHeadline subHeading='Card component' />

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
    <Card className='relative w-2/3 p-0 rounded-2xl'>
      <CardHeader>Hello world</CardHeader>
    </Card>
  );
};
