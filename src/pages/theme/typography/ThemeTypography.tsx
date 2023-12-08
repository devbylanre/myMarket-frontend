import React, { useState } from 'react';
import { Text } from '../../../components/ui/Text';
import { ThemeHeader, ThemeTab } from '../Theme';
import { ThemeCard } from '../Theme';

export const ThemeTypography = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <ThemeHeader>
        <Text
          as='p'
          className='text-zinc-700'
        >
          Documentation and examples for MyMarket UI typography, including
          global settings, headings, body text, lists, and more.
        </Text>
      </ThemeHeader>

      <HeadingOne />
    </div>
  );
};

const HeadingOne = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  return (
    <div className='flex flex-col gap-y-8'>
      <div className='flex flex-col gap-y-1'>
        <Text
          as='h5'
          size='lg'
          weight={500}
        >
          Heading One | H1
        </Text>
        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error enim,
          eaque quidem, ipsum animi officiis praesentium voluptates asperiores
          iusto provident delectus unde? Exercitationem ducimus delectus magnam,
          sed nemo necessitatibus temporibus?
        </Text>
      </div>
      <ThemeTab
        tab={tab}
        setTab={setTab}
      />
      <ThemeCard tab={tab}>
        {tab === 'preview' ? (
          <Text
            as='h1'
            size='5xl'
            weight={500}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio in
            totam! Officia expedita impedit quibusdam, asperiores quaerat
            debitis enim rerum, nam nostrum eveniet beatae aliquid alias.
            Dolorum, temporibus dolor.
          </Text>
        ) : (
          <Text as='p'>Coming soon</Text>
        )}
      </ThemeCard>
    </div>
  );
};
