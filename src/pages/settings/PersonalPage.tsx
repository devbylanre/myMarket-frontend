import React, { HTMLAttributes } from 'react';
import { Text } from '../../components/ui/Text';
import { Badge } from '../../components/ui/Badge';
import { LuCheck, LuMinimize2, LuPencilLine } from 'react-icons/lu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/Accordion';
import { Form, Formik } from 'formik';
import { FormControl } from '../../components/ui/FormControl';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { twMerge } from 'tailwind-merge';
import { FormItem } from '../../components/ui/FormItem';

export const PersonalPage = () => {
  return (
    <div className='space-y-12'>
      <div className=''>
        <Text
          as='h5'
          size='xl'
          weight={600}
          className='capitalize'
        >
          Personal & Information settings
        </Text>
      </div>

      <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:w-3/5'>
        <Tab />
      </div>
    </div>
  );
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = ({ className, ...rest }: CardProps) => {
  return (
    <div
      className={twMerge(
        'p-3 bg-white ring-1 ring-zinc-950/10 bgwhite rounded-2xl space-y-4',
        className
      )}
      {...rest}
    />
  );
};

const Tab = () => {
  return (
    <Card>
      <div className='space-y-1'>
        <Text
          as='h5'
          weight={600}
        >
          Update names
        </Text>
        <Text
          as='p'
          size='sm'
        >
          Edit your first and last names in the order which they appear
        </Text>
      </div>

      <Formik
        initialValues={{ firstName: '', lastName: '' }}
        onSubmit={() => {}}
      >
        <Form>
          <Accordion
            type='multiple'
            collapsible
            className='space-y-2'
          >
            <FirstName />
            <LastName />
          </Accordion>
        </Form>
      </Formik>
    </Card>
  );
};

const FirstName = () => {
  return (
    <AccordionItem value='first-name'>
      <AccordionTrigger
        value='first-name'
        className='inline-flex items-center justify-between w-full h-8'
      >
        {(isActive) =>
          !isActive ? (
            <>
              <Text
                as='h6'
                size='sm'
                weight={500}
              >
                Femi
              </Text>
              <Badge>
                <LuPencilLine />
                Edit
              </Badge>
            </>
          ) : (
            <>
              <Text
                as='h6'
                size='sm'
              >
                Tunde
              </Text>
              <Badge variant='outline'>
                <LuMinimize2 />
                Cancel
              </Badge>
            </>
          )
        }
      </AccordionTrigger>

      <AccordionContent value='first-name'>
        <FormItem className='inline-flex'>
          <FormControl name='firstName'>
            <Input
              name='firstName'
              placeholder='John Doe'
              className='h-8'
            />
          </FormControl>
          <Button size='sm'>Update</Button>
        </FormItem>
      </AccordionContent>
    </AccordionItem>
  );
};

const LastName = () => {
  return (
    <AccordionItem value='last-name'>
      <AccordionTrigger
        value='last-name'
        className='inline-flex items-center justify-between w-full h-8'
      >
        {(isActive) =>
          !isActive ? (
            <>
              <Text
                as='h6'
                size='sm'
                weight={500}
              >
                Tukay
              </Text>
              <Badge>
                <LuPencilLine />
                Edit
              </Badge>
            </>
          ) : (
            <>
              <Text
                as='h6'
                size='sm'
              >
                Shanumi
              </Text>
              <Badge variant='outline'>
                <LuMinimize2 />
                Cancel
              </Badge>
            </>
          )
        }
      </AccordionTrigger>

      <AccordionContent value='last-name'>
        <FormItem className='inline-flex'>
          <FormControl name='lastName'>
            <Input
              name='lastName'
              placeholder='John Doe'
              className='h-8'
            />
          </FormControl>
          <Button size='sm'>Update</Button>
        </FormItem>
      </AccordionContent>
    </AccordionItem>
  );
};
