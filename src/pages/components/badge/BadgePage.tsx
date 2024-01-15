import React from 'react';
import { Badge, BadgeDismiss } from '../../../components/Badge';
import { LuX } from 'react-icons/lu';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { Div } from '../../../components/Div';

export const BadgePage = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <PageHeadline subHeading='Present information in the form of a badge-like design, adding a decorative or informative element to the display.' />

      <PageTab>
        <Example />
      </PageTab>

      <PageTab>
        <ExampleWithDismiss />
      </PageTab>
    </div>
  );
};

const Example = () => {
  return (
    <Div
      layout='flex'
      className='flex flex-wrap gap-3'
    >
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
    </Div>
  );
};

const ExampleWithDismiss = () => {
  return (
    <Div
      layout='flex'
      className='flex flex-wrap gap-3'
    >
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
    </Div>
  );
};
