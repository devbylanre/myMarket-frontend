import React from 'react';
import { Text } from '../../../components/Text';
import { PageHeadline } from '../shared/PageHeadline';
import { PageTab } from '../shared/PageTab';

export const TypographyPage = () => {
  return (
    <div className='space-y-8'>
      <PageHeadline subHeading='Typography components' />

      <PageTab>
        <Weight />
      </PageTab>

      <PageTab>
        <Size />
      </PageTab>
    </div>
  );
};

const Weight = () => {
  return (
    <>
      {Array.from([300, 400, 500, 600, 700]).map((value, i) => (
        <Text
          key={i}
          as='h5'
          size='lg'
          weight={value as 300}
          className='w-full text-left'
        >
          The brown fox jumped over the blue wall
        </Text>
      ))}
    </>
  );
};

const Size = () => {
  return (
    <>
      {Array.from(['xs', 'sm', 'lg', 'xl']).map((value, i) => (
        <Text
          key={i}
          as='h5'
          size={value as 'sm'}
          weight={500}
          className='w-full text-left'
        >
          The brown fox jumped over the blue wall
        </Text>
      ))}
    </>
  );
};
