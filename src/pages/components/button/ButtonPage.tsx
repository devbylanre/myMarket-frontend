import React from 'react';
import { Button } from '../../../components/ui/Button';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { TabContent } from '../../../components/ui/Tab';

export const ButtonPage = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <PageHeadline subHeading='Button components' />

      <PageTab>
        <TabContent
          value='preview'
          className='flex flex-wrap w-full gap-2 lg:w-96'
        >
          <Example />
        </TabContent>
      </PageTab>

      <PageTab>
        <TabContent
          value='preview'
          className='flex flex-wrap w-full gap-2 lg:w-96'
        >
          <ExampleSizes />
        </TabContent>
      </PageTab>
    </div>
  );
};

const Example = () => {
  return (
    <>
      {Array.from(['ghost', 'solid', 'outline', 'danger']).map((value, i) => (
        <Button
          key={i}
          variant={value as 'solid'}
          className='capitalize'
        >
          Variant {value}
        </Button>
      ))}
    </>
  );
};

const ExampleSizes = () => {
  return (
    <>
      {Array.from(['xs', 'sm', 'md', 'lg', 'xl']).map((value, i) => (
        <Button
          key={i}
          variant='outline'
          size={value as 'xs'}
        >
          Size {value}
        </Button>
      ))}
    </>
  );
};
