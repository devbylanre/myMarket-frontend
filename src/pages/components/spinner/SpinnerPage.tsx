import React from 'react';
import { Spinner } from '../../../components/ui/Spinner';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { TabContent } from '../../../components/ui/Tab';

export const SpinnerPage = () => {
  return (
    <div className='space-y-8'>
      <PageHeadline subHeading='Hey there' />

      <PageTab>
        <TabContent
          value='preview'
          className='flex p-3 rounded-lg gap-x-5 bg-primary-50'
        >
          <Example />
        </TabContent>
      </PageTab>
    </div>
  );
};

const Example = () => {
  return (
    <>
      {Array.from(['light', 'primary', 'dark']).map((variant, i) => (
        <Spinner
          key={i}
          variant={variant as 'primary'}
        />
      ))}
    </>
  );
};
