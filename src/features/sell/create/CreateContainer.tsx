import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { Details } from './components/Details';
import { Separator } from '../../../components/ui/Separator';
import { Buttons } from './components/Buttons';
import * as yup from 'yup';
import { BrandAndCategory } from './components/BrandAndCategory';
import { Pricing } from './components/Pricing';
import { Images } from './components/Images';
import { useOutletContext } from 'react-router-dom';
import { useCreateProduct } from './hooks/useCreateProduct';
import { FormError } from '../../../components/templates/FormError';
import { User } from '../../../contexts/user.types';

interface IForm {
  title: string;
  tagline: string;
  brand: string;
  model: string;
  category: string;
  description: string;
  price: number;
  discount: number;
  images: any[];
}

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required('Product title must be provided')
    .max(100, 'Product title cannot exceed 100 characters'),
  tagline: yup
    .string()
    .required('Product tagline must be provided')
    .max(320, 'Product tagline cannot exceed 320 characters'),
  description: yup
    .string()
    .required('Product description must be provided')
    .max(2500, 'Product description cannot exceed 2500 characters'),
  brand: yup.string().required('Product brand must be provided'),
  model: yup.string().required('Product model must be provided'),
  category: yup.string().required('Product category must be provided'),
  price: yup
    .number()
    .required('Product price must be provided')
    .min(10, 'Product price cannot be less than 10NGN'),
  discount: yup
    .number()
    .min(0, 'Product discount cannot be less than 0')
    .max(99.9, 'Product discount cannot exceed 99.9 percent'),
  images: yup
    .mixed()
    .test(
      'fileCount',
      'At least one image must be provided',
      (value: any) => value && value.length > 0
    )
    .test('fileSize', 'File size must be less than 2MB', (value: any) => {
      if (!value || value.length < 1) return true; // Handle undefined or null values
      return value[0].file.size <= 2 * 1024 * 1024;
    })
    .test(
      'fileType',
      'Only PNG, JPG, or JPEG files are allowed',
      (value: any) => {
        if (!value || value.length < 1) return true; // Handle undefined or null values
        const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];
        return allowedTypes.includes(value[0].file.type);
      }
    ),
});

export const CreateContainer = () => {
  const { token } = useOutletContext() as User;
  const { status, createProduct } = useCreateProduct();
  const initialValues: IForm = {
    title: '',
    tagline: '',
    brand: '',
    model: '',
    category: '',
    description: '',
    price: 0.0,
    discount: 0.0,
    images: [],
  };

  const handleSubmit = async (
    values: IForm,
    { resetForm }: FormikHelpers<IForm>
  ) => {
    await createProduct(token.id, { ...values });

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <Details />
          <Separator className='my-8' />
          <BrandAndCategory />
          <Separator className='my-8' />
          <Pricing
            price={
              formik.values.price -
              (formik.values.price * formik.values.discount) / 100
            }
          />
          <Separator className='my-8' />
          <Images formik={formik} />
          <Buttons isLoading={status.isLoading} />

          {status.state === 'error' ? <FormError error={status.error} /> : null}
        </Form>
      )}
    </Formik>
  );
};
