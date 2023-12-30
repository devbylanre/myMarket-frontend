import React from 'react';
import { Text } from '../../../components/ui/Text';
import { Separator } from '../../../components/ui/Separator';
import { Button } from '../../../components/ui/Button';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { TabContent } from '../../../components/ui/Tab';

export const SeparatorPage = () => {
  return (
    <div className='space-y-8'>
      <PageHeadline subHeading='Separator components' />

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
      <div>
        <Text
          as='h5'
          size='xl'
          weight={500}
        >
          Wait can i separate items?
        </Text>
      </div>
      <Separator />
      <div className='inline-flex'>
        <Button>Create account</Button>
        <Separator orientation='vertical' />
        <Button>Connect with others</Button>
      </div>
    </div>
  );
};
