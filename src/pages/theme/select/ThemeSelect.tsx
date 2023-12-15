import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
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
      <ThemeHeader>
        <Text as='p'>Select</Text>
      </ThemeHeader>

      <Formik
        initialValues={{ sport: [], team: '' }}
        onSubmit={() => {}}
      >
        <Form className='flex flex-col gap-y-8'>
          <FormSelect />
          <FormMultipleSelect />
        </Form>
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
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className='flex flex-col space-y-8'>
      <div>
        <Text
          as='h5'
          size='lg'
          weight={500}
        >
          Select field
        </Text>
        <Text
          as='p'
          size='sm'
        >
          hey
        </Text>
      </div>

      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        <FormField
          name='team'
          className='w-96'
        >
          <FormLabel>Assign task</FormLabel>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='Select a team member' />
            </SelectTrigger>
            <SelectContent className='space-y-0.5'>
              {teams.map((team, i) => (
                <SelectItem
                  key={i}
                  value={team}
                  className={(isActive) =>
                    twMerge(
                      'h-10 text-sm flex items-center hover:bg-zinc-100 px-2 rounded-md gap-x-2',
                      isActive && 'bg-zinc-100'
                    )
                  }
                >
                  <Avatar
                    src={`/assets/images/memoji-0${i + 1}.png`}
                    alt={`user${i}`}
                  >
                    <AvatarFallback>{team[0]}</AvatarFallback>
                  </Avatar>
                  {team}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
      </ThemeCard>
    </div>
  );
};

const options: string[] = [
  'soccer',
  'football',
  'basketball',
  'boxing',
  'hockey',
];

const FormMultipleSelect = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className='flex flex-col space-y-8'>
      <div>
        <Text
          as='h5'
          size='lg'
          weight={500}
        >
          Multiple select
        </Text>
        <Text
          as='p'
          size='sm'
        >
          hey
        </Text>
      </div>

      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        <FormField
          name='sport'
          className='w-96'
        >
          <FormLabel>Select a sport</FormLabel>
          <Select multiple>
            <SelectTrigger>
              <SelectValue placeholder='Choose a Sport'>
                {(value: string[]) =>
                  value.map((v, i) => (
                    <Badge
                      key={i}
                      variant='outline'
                      className='my-1 mr-1 text-sm capitalize'
                    >
                      {v}
                    </Badge>
                  ))
                }
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {options.map((option, i) => (
                <SelectItem
                  key={i}
                  value={option}
                  className={(isActive) =>
                    twMerge(
                      'capitalize text-sm h-8 flex items-center px-2',
                      isActive && 'bg-zinc-100 rounded-md'
                    )
                  }
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
      </ThemeCard>
    </div>
  );
};
