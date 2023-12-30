import React from 'react';
import { Text } from '../../../components/ui/Text';
import { Alert, AlertDismiss } from '../../../components/ui/Alert';
import { LuWifiOff, LuX } from 'react-icons/lu';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { TabContent } from '../../../components/ui/Tab';
import { Separator } from '../../../components/ui/Separator';

export const AlertPage = () => {
  return (
    <div className='flex flex-col space-y-8'>
      <PageHeadline subHeading='Alert components' />
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
    <div>
      <Alert className='p-3'>
        <div className='inline-flex items-center w-full gap-x-3'>
          <LuWifiOff className='w-5 h-5 stroke-zinc-950' />
          <Text
            as='h6'
            size='sm'
            weight={500}
            className='flex-1'
          >
            No internet connection
          </Text>
          <AlertDismiss>
            <LuX className='w-4 h-4' />
          </AlertDismiss>
        </div>
        <Separator />
        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          obcaecati sunt officiis placeat impedit illo soluta ratione
          reprehenderit
        </Text>
      </Alert>
    </div>
  );
};
