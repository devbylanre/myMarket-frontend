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
  images: any;
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
  price: yup
    .number()
    .required('Product price must be provided')
    .min(1, 'Invalid product price'),
  discount: yup
    .number()
    .required('Product discount must be provided')
    .min(1, 'Invalid product discount')
    .max(50, 'Product discount cannot exceed 50 percent'),
  images: yup
    .mixed()
    .test(
      'fileCount',
      'At least one image must be provided',
      (value: any) => value && value.length > 0
    )
    .test('fileSize', 'File size must be less than 2MB', (value: any) => {
      if (!value) return true; // Handle undefined or null values
      return value[0].size <= 2 * 1024 * 1024;
    })
    .test(
      'fileType',
      'Only PNG, JPG, or JPEG files are allowed',
      (value: any) => {
        if (!value) return true; // Handle undefined or null values
        const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];
        return allowedTypes.includes(value[0].type);
      }
    ),
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
    price: 0.0,
    discount: 0.0,
    images: undefined,
  };

  const handleSubmit = async (values: IForm) => {
    console.log('submitting');
    return await createProduct(token.id, { ...values });
  };

  return (
    <>
      <div className='space-y-2'>
        <Text
          as='h3'
          size='2xl'
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
