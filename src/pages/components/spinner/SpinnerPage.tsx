import React from 'react';
import { Spinner } from '../../../components/Spinner';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { Div } from '../../../components/Div';

export const SpinnerPage = () => {
  return (
    <div className='space-y-8'>
      <PageHeadline subHeading='Hey there' />

      <PageTab>
        <Example />
      </PageTab>
    </div>
  );
};

const Example = () => {
  return (
    <Div
      layout='flex'
      className='p-4 rounded-lg gap-x-4 bg-zinc-300'
    >
      {Array.from(['light', 'default', 'dark']).map((variant, i) => (
        <Spinner
          key={i}
          variant={variant as 'default'}
        />
      ))}
    </Div>
  );
};
