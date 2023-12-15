import React, { useState } from 'react';
import { UtilHeader } from '../Util';
import { Text } from '../../../components/ui/Text';
import { Formik, Form } from 'formik';
import { Textarea, TextareaLimit } from '../../../components/ui/Textarea';
import {
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
} from '../../../components/ui/Form';

export const ThemeTextarea = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <UtilHeader>
        <Text as='p'>Textarea field</Text>
      </UtilHeader>
    </div>
  );
};

const FormTextarea = () => {
  return;
};
