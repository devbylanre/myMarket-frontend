import React from 'react';
import { Formik, Form } from 'formik';
import { Text } from '../../../components/ui/Text';
import { Details } from './components/Details';
import { Separator } from '../../../components/ui/Separator';
import { Buttons } from './components/Buttons';
import * as yup from 'yup';
import { BrandAndCategory } from './components/BrandAndCategory';
import { Pricing } from './components/Pricing';
import { Images } from './components/Images';
import { useOutletContext } from 'react-router-dom';
import { IUser } from '../../../utils/types';
import { useCreateProduct } from './hooks/useCreateProduct';
import { FormError } from '../../../components/templates/FormError';

interface IForm {
  title: string;
  tagline: string;
  brand: string;
  model: string;
  category: string;
  description: string;
  price: number;
  discount: number;
  images: File[];
}

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required('Product title must be provided')
    .max(100, 'Product title cannot exceed 100 characters'),
  tagline: yup
    .string()
    .required('Product tagline must be provided')
    .max(256, 'Product tagline cannot exceed 256 characters'),
  description: yup
    .string()
    .required('Product description must be provided')
    .max(1500, 'Product description cannot exceed 1500 characters'),
  brand: yup.string().required('Product brand must be provided'),
  model: yup.string().required('Product model must be provided'),
  category: yup.string().required('Product category must be provided'),
  price: yup.number().required('Product price must be provided'),
  discount: yup.number().required('Product discount must be provided'),
});

export const CreateContainer = () => {
  const { token } = useOutletContext() as IUser;
  const { response, createProduct } = useCreateProduct();
  const initialValues: IForm = {
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

  const handleSubmit = async (values: IForm) => {
    console.log(values);
    await createProduct(token.id, values);
  };

  return (
    <>
      <div className='space-y-2'>
        <Text
          as='h3'
          size='xl'
          weight={600}
        >
          Upload new product
        </Text>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form className='mt-5'>
            <Details />
            <Separator className='my-8' />
            <BrandAndCategory />
            <Separator className='my-8' />
            <Pricing />
            <Separator className='my-8' />
            <Images formik={formik} />
            <Buttons />

            {response.state === 'error' ? (
              <FormError error={response.error} />
            ) : null}
          </Form>
        )}
      </Formik>
    </>
  );
};
