import React from 'react';
import { Text } from '../../../components/ui/Text';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';
import { TabContent } from '../../../components/ui/Tab';

export const TypographyPage = () => {
  return (
    <div className='space-y-8'>
      <PageHeadline subHeading='Typography components' />

      <PageTab>
        <TabContent value='preview'>
          <Weight />
        </TabContent>
      </PageTab>

      <PageTab>
        <TabContent value='preview'>
          <Size />
        </TabContent>
      </PageTab>
    </div>
  );
};

const Weight = () => {
  return (
    <>
      {Array.from([100, 200, 300, 400, 500, 600, 700]).map((value, i) => (
        <Text
          key={i}
          as='h5'
          size='2xl'
          weight={value as 300}
        >
          Hello world weight {value}
        </Text>
      ))}
    </>
  );
};

const Size = () => {
  return (
    <>
      {Array.from(['xs', 'sm', 'lg', 'xl', '2xl', '3xl', '4xl']).map(
        (value, i) => (
          <Text
            key={i}
            as='h5'
            size={value as 'sm'}
            weight={500}
            className='w-full'
          >
            Use a font size of {value}
          </Text>
        )
      )}
    </>
  );
};
