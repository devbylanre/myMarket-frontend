import React, { useState } from 'react';
import { UtilHeader } from '../Util';
import { Text } from '../../../components/ui/Text';
import { Toast } from '../../../components/ui/Toast';
import { Button } from '../../../components/ui/Button';
import { LuCheck } from 'react-icons/lu';

export const ThemeToast = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <UtilHeader>
        <Text as='p'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          porro nisi eum mollitia totam doloribus nobis, odit harum impedit
          tenetur unde.
        </Text>
      </UtilHeader>
    </div>
  );
};

const Context = () => {
  return;
};
