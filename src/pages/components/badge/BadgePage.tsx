import React from 'react';
import { Badge, BadgeDismiss } from '../../../components/Badge';
import { LuX } from 'react-icons/lu';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { TabContent } from '../../../components/Tab';

export const BadgePage = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <PageHeadline subHeading='Badge components' />

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
          <ExampleWithDismiss />
        </TabContent>
      </PageTab>
    </div>
  );
};

const Example = () => {
  return (
    <>
      {Array.from(['solid', 'outline', 'success', 'danger', 'warning']).map(
        (variant, i) => (
          <Badge
            key={i}
            variant={variant as 'solid'}
          >
            Badge {variant}
          </Badge>
        )
      )}
    </>
  );
};

const ExampleWithDismiss = () => {
  return (
    <>
      {Array.from(['solid', 'outline', 'success', 'danger', 'warning']).map(
        (variant, i) => (
          <Badge
            key={i}
            variant={variant as 'solid'}
          >
            Badge {variant}
            <BadgeDismiss>
              <LuX />
            </BadgeDismiss>
          </Badge>
        )
      )}
    </>
  );
};
