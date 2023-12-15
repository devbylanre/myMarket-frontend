import React, { useState } from 'react';
import { UtilHeader } from '../Util';
import { Text } from '../../../components/ui/Text';
import { Formik, Form } from 'formik';
import { Switch } from '../../../components/ui/Switch';
import { FormField } from '../../../components/ui/Form';

export const ThemeSwitch = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <UtilHeader>
        <Text as='p'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          deleniti voluptas aliquam quas, quos ab, delectus numquam esse ratione
          sed eum! Culpa voluptatum vel, saepe rerum enim iusto ad facere?
        </Text>
      </UtilHeader>
    </div>
  );
};

const FormSwitch = () => {
  return;
};
