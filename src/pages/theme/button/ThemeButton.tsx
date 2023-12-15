import React, { useState } from 'react';
import { Text } from '../../../components/ui/Text';
import { Button } from '../../../components/ui/Button';
import {
  UtilCard,
  UtilCardCode,
  UtilCardPreview,
  UtilContainer,
  UtilHeader,
  UtilTab,
} from '../Util';

export const ThemeButton = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <UtilHeader>
        <Text as='p'>
          Apply varied button designs to actions within forms, dialogs, and
          other elements, offering compatibility with diverse sizes, states, and
          additional features.
        </Text>
      </UtilHeader>
      <Variants />
      <Sizes />
    </div>
  );
};

const Variants = () => {
  return (
    <UtilContainer>
      <UtilTab />
      <UtilCard>
        <UtilCardPreview className='space-x-2 space-y-2'>
          {Array.from([
            'default',
            'primary',
            'secondary',
            'soft',
            'outline',
            'success',
            'danger',
            'warning',
          ]).map((value, i) => (
            <Button
              key={i}
              variant={value as 'default'}
            >
              Variant {value}
            </Button>
          ))}
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};

const Sizes = () => {
  return (
    <UtilContainer>
      <UtilTab />
      <UtilCard>
        <UtilCardPreview className='space-x-2'>
          {Array.from(['xs', 'sm', 'md', 'lg', 'xl']).map((value, i) => (
            <Button
              key={i}
              variant='outline'
              size={value as 'xs'}
            >
              Size {value}
            </Button>
          ))}
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};
