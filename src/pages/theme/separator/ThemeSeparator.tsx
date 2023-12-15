import React, { useState } from 'react';
import { UtilHeader } from '../Util';
import { Text } from '../../../components/ui/Text';
import { Separator } from '../../../components/ui/Separator';
import { Button } from '../../../components/ui/Button';

export const ThemeSeparator = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <UtilHeader>
        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nihil!
          Similique quisquam accusamus
        </Text>
      </UtilHeader>
    </div>
  );
};

const Card = () => {
  return;
};
