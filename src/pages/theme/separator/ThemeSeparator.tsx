import React from 'react';
import { ThemeHeader } from '../Theme';
import { Text } from '../../../components/ui/Text';

export const ThemeSeparator = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <ThemeHeader>
        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nihil!
          Similique quisquam accusamus
        </Text>
      </ThemeHeader>
    </div>
  );
};
