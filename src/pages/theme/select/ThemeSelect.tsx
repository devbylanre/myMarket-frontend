import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { UtilHeader } from '../Util';
import { Text } from '../../../components/ui/Text';
import { FormField, FormLabel } from '../../../components/ui/Form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/Select';
import { twMerge } from 'tailwind-merge';
import { Badge } from '../../../components/ui/Badge';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';

export const ThemeSelect = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <UtilHeader>
        <Text as='p'>Select</Text>
      </UtilHeader>

      <Formik
        initialValues={{ sport: [], team: '' }}
        onSubmit={() => {}}
      >
        <Form className='flex flex-col gap-y-8'></Form>
      </Formik>
    </div>
  );
};

const teams: string[] = [
  'Arike preorder',
  'Tunde enugbe',
  'Mayowa jakan',
  'Funmi tukay',
  'Blessing kojeunri',
];

const FormSelect = () => {
  return;
};

const options: string[] = [
  'soccer',
  'football',
  'basketball',
  'boxing',
  'hockey',
];

const FormMultipleSelect = () => {
  return;
};
