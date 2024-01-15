import React from 'react';
import { Text } from '../../../components/Text';
import { Separator } from '../../../components/Separator';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { Div } from '../../../components/Div';

export const SeparatorPage = () => {
  return (
    <Div className='space-y-8'>
      <PageHeadline subHeading='Separator components' />

      <PageTab>
        <Example />
      </PageTab>
    </Div>
  );
};

const Example = () => {
  return (
    <Div>
      <Text
        as='h5'
        size='lg'
        weight={500}
      >
        Hey have you tried out separator?
      </Text>
      <Separator />
      <Text
        as='h5'
        size='sm'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi optio
        error earum facilis, aliquam culpa asperiores consequuntur consectetur
        commodi! Veritatis animi nulla quo sit, ipsum culpa pariatur officia nam
        praesentium!
      </Text>
    </Div>
  );
};
