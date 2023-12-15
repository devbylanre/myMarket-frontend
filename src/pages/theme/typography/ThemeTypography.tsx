import React, { useState } from 'react';
import { Text } from '../../../components/ui/Text';
import {
  UtilCard,
  UtilCardCode,
  UtilCardPreview,
  UtilContainer,
  UtilHeader,
  UtilTab,
} from '../Util';

export const ThemeTypography = () => {
  return (
    <div className='space-y-12'>
      <UtilHeader>
        <Text
          as='p'
          className='text-zinc-700'
        >
          Documentation and examples for MyMarket UI typography, including
          global settings, headings, body text, lists, and more.
        </Text>
      </UtilHeader>

      <Weight />
      <Size />
    </div>
  );
};

const Weight = () => {
  return (
    <UtilContainer>
      <UtilTab />
      <UtilCard>
        <UtilCardPreview>
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
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};

const Size = () => {
  return (
    <UtilContainer>
      <UtilTab />
      <UtilCard>
        <UtilCardPreview>
          {Array.from(['xs', 'sm', 'lg', 'xl', '2xl', '3xl', '4xl']).map(
            (value, i) => (
              <Text
                key={i}
                as='h5'
                size={value as 'sm'}
                weight={500}
              >
                Use a font size of {value}
              </Text>
            )
          )}
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};
