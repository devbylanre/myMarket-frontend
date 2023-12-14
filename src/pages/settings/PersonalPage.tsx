import React from 'react';
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

export const PersonalPage = () => {
  return (
    <div className='px-5 space-y-8'>
      <div>
        <Text
          as='h5'
          size='2xl'
          weight={500}
        >
          Personal & Information
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          ipsam ratione. Odit accusamus non aliquid distinctio hic, labore fuga
          aliquam consequatur
        </Text>
      </div>

      <Accordions />
    </div>
  );
};

const Accordions = () => {
  return (
    <Accordion
      type='multiple'
      collapsible
    >
      <AccordionItem
        value='first-name'
        className='p-3 bg-white ring-1 ring-zinc-950/10 bgwhite w-80 rounded-2xl'
      >
        <div>
          <Text
            as='h5'
            size='lg'
          >
            Update names
          </Text>
          <Text
            as='p'
            size='sm'
          >
            Edit your first and last names
          </Text>
        </div>
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
                  Tukay
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
          <Formik
            initialValues={{ firstName: '' }}
            onSubmit={() => {}}
          >
            <Form>
              <div className='inline-flex w-full gap-x-2'>
                <FormControl name='firstName'>
                  <Input
                    name='first-name'
                    placeholder='John Doe'
                    className='h-8'
                  />
                </FormControl>
                <Button size='sm'>Update</Button>
              </div>
            </Form>
          </Formik>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
