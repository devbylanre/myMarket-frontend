import React, { useState } from 'react';
import { Text } from '../../../components/ui/Text';
import { Alert } from '../../../components/ui/Alert';
import { Button } from '../../../components/ui/Button';
import { LuX } from 'react-icons/lu';
import { UtilHeader } from '../Util';

export const ThemeAlert = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <UtilHeader>
        <Text as='p'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet ipsam
          magni saepe soluta, nostrum recusandae facere? Magni consequatur fuga,
          laboriosam nisi
        </Text>
      </UtilHeader>
    </div>
  );
};

const Card = () => {
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);

  return;
};
