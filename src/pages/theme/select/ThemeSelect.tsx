import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import {
  Select,
  SelectGroup,
  SelectIem,
  SelectTrigger,
  SelectValue,
  useSelect,
} from '../../../components/ui/Select';
import { FormItem } from '../../../components/ui/FormItem';
import { Label } from '../../../components/ui/Label';
import { LuCheck } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { Button } from '../../../components/ui/Button';

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
  'Marketing',
  'Sales & Management',
  'Designers',
  'Human Resources',
  'System analysts',
];

const FormSelect = () => {
  const [tab, setTab] = useState('preview');
  const [selectTeam, checkTeam, team] = useSelect('team');

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
        <FormItem className='w-96'>
          <Label name='team'>Assign task</Label>
          <Select>
            <SelectTrigger name='team'>
              <SelectValue placeholder='Select organization team'>
                {team && (
                  <Text
                    as='p'
                    size='sm'
                    weight={600}
                    className='pl-2'
                  >
                    {team}
                  </Text>
                )}
              </SelectValue>
            </SelectTrigger>
            <SelectGroup name='team'>
              {teams.map((team) => (
                <SelectIem
                  onSelect={() => selectTeam(team)}
                  key={team}
                  className={twMerge(
                    'h-8 px-2 inline-flex items-center hover:bg-zinc-50 cursor-pointer justify-between',
                    checkTeam(team) && 'font-semibold'
                  )}
                >
                  <Text
                    as='p'
                    size='sm'
                    className={twMerge(
                      'first-letter:uppercase',
                      checkTeam(team) && 'font-semibold'
                    )}
                  >
                    {team}
                  </Text>
                  {checkTeam(team) && <LuCheck className='w-4 h-4' />}
                </SelectIem>
              ))}
            </SelectGroup>
          </Select>
        </FormItem>
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
  const [tab, setTab] = useState('preview');
  const [selectSport, checkSport, sports] = useSelect('sport', true);

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
        <FormItem className='w-96'>
          <Label name='sport'>Select a sport</Label>
          <Select>
            <SelectTrigger name='sport'>
              <SelectValue
                placeholder='Select your favorite sport'
                className='flex flex-wrap'
              >
                {sports.length > 0 &&
                  Array.from(sports).map((sport) => (
                    <Button
                      key={sport}
                      variant='outline'
                      type='button'
                      className='h-7 m-1 font-normal rounded px-2 border border-zinc-200 capitalize text-zinc-800'
                    >
                      {sport}
                    </Button>
                  ))}
              </SelectValue>
            </SelectTrigger>
            <SelectGroup name='sport'>
              {options.map((option) => (
                <SelectIem
                  onSelect={() => selectSport(option)}
                  key={option}
                  className={twMerge(
                    'h-8 px-2 inline-flex items-center hover:bg-zinc-50 cursor-pointer justify-between',
                    checkSport(option) && 'font-semibold'
                  )}
                >
                  <Text
                    as='p'
                    size='sm'
                    className={twMerge(
                      'first-letter:uppercase',
                      checkSport(option) && 'font-semibold'
                    )}
                  >
                    {option}
                  </Text>
                  {checkSport(option) && <LuCheck className='w-4 h-4' />}
                </SelectIem>
              ))}
            </SelectGroup>
          </Select>
        </FormItem>
      </ThemeCard>
    </div>
  );
};
