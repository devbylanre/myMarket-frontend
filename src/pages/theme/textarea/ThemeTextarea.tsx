import React from 'react';
import { ThemeHeader } from '../Theme';
import { Text } from '../../../components/ui/Text';

export const ThemeTextarea = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <ThemeHeader>
        <Text as='p'>Textarea field</Text>
      </ThemeHeader>
    </div>
  );
};
