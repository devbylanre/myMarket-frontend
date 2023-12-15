import React, { useState } from 'react';
import { UtilHeader } from '../Util';
import { Text } from '../../../components/ui/Text';
import { Form, Formik } from 'formik';
import { Checkbox } from '../../../components/ui/Checkbox';
import { FormField } from '../../../components/ui/Form';

export const ThemeCheckbox = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <UtilHeader>
        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          cupiditate consectetur obcaecati dignissimos ducimus nulla, quis
        </Text>
      </UtilHeader>
    </div>
  );
};

const FormCheckbox = () => {
  return;
};
