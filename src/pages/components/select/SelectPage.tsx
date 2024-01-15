import React from 'react';
import { Formik, Form } from 'formik';
import { FormControl, FormField, FormLabel } from '../../../components/Form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/Select';
import { twMerge } from 'tailwind-merge';
import { Badge } from '../../../components/Badge';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../components/Avatar';
import { PageTab } from '../shared/PageTab';
import { PageHeadline } from '../shared/PageHeadline';
import { Div } from '../../../components/Div';

export const SelectPage = () => {
  return (
    <Div className='space-y-12'>
      <PageHeadline subHeading='Select components' />

      <Formik
        initialValues={{ sport: [], team: '' }}
        onSubmit={() => {}}
      >
        <Form className='flex flex-col gap-y-8'>
          <PageTab>
            <Example />
          </PageTab>
          <PageTab>
            <ExampleWithMultipleOptions />
          </PageTab>
        </Form>
      </Formik>
    </Div>
  );
};

const teams: string[] = [
  'Arike preorder',
  'Tunde enugbe',
  'Mayowa jakan',
  'Funmi tukay',
  'Blessing kojeunri',
];

const Example = () => {
  return (
    <FormField
      name='sport'
      className='w-full sm:w-80'
    >
      <FormLabel>Choose an organization team member</FormLabel>
      <Select>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder='Select a member' />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {teams.map((team, i) => (
            <SelectItem
              key={i}
              value={team}
              className={(isActive) =>
                twMerge(
                  'h-9 inline-flex items-center w-full px-1.5 hover:bg-zinc-200 rounded-lg gap-x-2 text-sm',
                  isActive &&
                    'bg-primary/10 text-primary hover:bg-primary/10 font-medium'
                )
              }
            >
              <Avatar size='xs'>
                <AvatarImage
                  src={`/assets/images/memoji-0${i + 1}.png`}
                  alt={`user${i}`}
                />
                <AvatarFallback>{team[0]}</AvatarFallback>
              </Avatar>
              {team}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  );
};

const options: string[] = [
  'soccer',
  'football',
  'basketball',
  'boxing',
  'hockey',
];

const ExampleWithMultipleOptions = () => {
  return (
    <FormField
      name='team'
      className='w-full sm:w-80'
    >
      <FormLabel>Choose your favorite sports</FormLabel>
      <Select multiple>
        <FormControl>
          <SelectTrigger>
            <SelectValue
              placeholder='Select a sport'
              className='flex gap-x-2'
            >
              {(value) =>
                value.map((v: string, i: number) => (
                  <Badge
                    key={i}
                    variant='outline'
                    className='text-sm capitalize h-7'
                  >
                    {v}
                  </Badge>
                ))
              }
            </SelectValue>
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {options.map((team, i) => (
            <SelectItem
              key={i}
              value={team}
              className={(isActive) =>
                twMerge(
                  'h-9 inline-flex items-center w-full px-1.5 text-sm hover:bg-zinc-100 rounded-md gap-x-2 capitalize',
                  isActive &&
                    'bg-primary/10 text-primary hover:bg-primary/10 font-medium'
                )
              }
            >
              {team}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  );
};
