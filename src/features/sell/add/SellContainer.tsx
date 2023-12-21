import React from 'react';
import { Formik, Form } from 'formik';
import { Accordion } from '../../../components/ui/Accordion';
import { Text } from '../../../components/ui/Text';
import { Detail } from './components/Detail';
import { Image } from './components/Image';
import { Price } from './components/Price';
import { Brand } from './components/Brand';
import { Description } from './components/Description';
import { Button } from '../../../components/ui/Button';

interface InitialValues {
  title: string;
  tagline: string;
  brand: string;
  model: string;
  category: string;
  description: string;
  price: number;
  discount: number;
  images: (Record<string, any> | string)[];
}

const initialValues: InitialValues = {
  title: '',
  tagline: '',
  brand: '',
  model: '',
  category: '',
  description: '',
  price: 0,
  discount: 0,
  images: [],
};

export const SellContainer = () => {
  return (
    <>
      <div className='space-y-2'>
        <Text
          as='h3'
          size='3xl'
          weight={500}
          className='text-primary'
        >
          Upload a Product
        </Text>
        <Text as='p'>
          Complete the form by filling all required fields to upload your
          product
        </Text>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
      >
        {(formik) => (
          <Form className='space-y-8'>
            <Accordion
              type='multiple'
              collapsible
              className='space-y-2'
            >
              <Detail />
              <Image />
              <Brand />
              <Description />
              <Price />
            </Accordion>

            <Button
              type='button'
              className='w-full'
            >
              Upload new product
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
