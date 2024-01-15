import React from 'react';
import { Button } from '../../../components/Button';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { Div } from '../../../components/Div';

export const ButtonPage = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <PageHeadline subHeading='Provide a clear and intuitive way for users to engage with the displayed content or trigger specific actions within the interface.' />

      <PageTab>
        <Example />
      </PageTab>

      <PageTab>
        <ExampleSizes />
      </PageTab>
    </div>
  );
};

const Example = () => {
  return (
    <Div
      layout='flex'
      className='flex-wrap gap-3'
    >
      {Array.from(['ghost', 'solid', 'outline', 'danger']).map((value, i) => (
        <Button
          key={i}
          variant={value as 'solid'}
          className='capitalize'
        >
          Variant {value}
        </Button>
      ))}
    </Div>
  );
};

const ExampleSizes = () => {
  return (
    <Div
      layout='flex'
      className='flex-wrap gap-3'
    >
      {Array.from(['xs', 'sm', 'md', 'lg', 'xl']).map((value, i) => (
        <Button
          key={i}
          variant='solid'
          size={value as 'xs'}
        >
          Size {value}
        </Button>
      ))}
    </Div>
  );
};
