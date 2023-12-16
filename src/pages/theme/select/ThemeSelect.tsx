import React from 'react';
import { Formik, Form } from 'formik';
import {
  UtilCard,
  UtilCardCode,
  UtilCardPreview,
  UtilContainer,
  UtilHeader,
  UtilTab,
} from '../Util';
import { Text } from '../../../components/ui/Text';
import { FormControl, FormField, FormLabel } from '../../../components/ui/Form';
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
        <Form className='flex flex-col gap-y-8'>
          <Example />
          <ExampleWithMultipleOptions />
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

const Example = () => {
  return (
    <UtilContainer>
      <UtilTab />
      <UtilCard>
        <UtilCardPreview>
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
                        'h-9 inline-flex items-center w-full px-1.5 hover:bg-zinc-100 rounded-md gap-x-2 text-sm',
                        isActive &&
                          'bg-primary/10 text-primary hover:bg-primary/10 font-medium'
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
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
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
    <UtilContainer>
      <UtilTab />
      <UtilCard>
        <UtilCardPreview>
          <FormField
            name='team'
            className='w-full sm:w-80'
          >
            <FormLabel>Choose your favourite sports</FormLabel>
            <Select multiple>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder='Select a member'>
                    {(value) =>
                      value.map((v: string, i: number) => (
                        <Badge
                          key={i}
                          variant='outline'
                          className='my-1 ml-0 mr-1 text-sm capitalize h-7'
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
        </UtilCardPreview>
        <UtilCardCode />
      </UtilCard>
    </UtilContainer>
  );
};
