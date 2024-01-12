import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { Details } from './components/Details';
import { Separator } from '../../../components/Separator';
import { Buttons } from './components/Buttons';
import * as yup from 'yup';
import { BrandAndCategory } from './components/BrandAndCategory';
import { Pricing } from './components/Pricing';
import { Images } from './components/Images';
import { useOutletContext } from 'react-router-dom';
import { FormError } from '../../shared/FormError';
import { User } from '../../../contexts/user.types';
import { Product } from '../../../contexts/product.types';
import { useProduct } from './hooks/useProduct';

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

export const CreateContainer = ({ product }: { product: Product | null }) => {
  const { token } = useOutletContext() as User;
  const { status, action } = useProduct(product);

  const initialValues: IForm = {
    title: product?.title || '',
    tagline: product?.tagline || '',
    brand: product?.brand || '',
    model: product?.model || '',
    category: product?.category || '',
    description: product?.description || '',
    price: product?.price || 0.0,
    discount: product?.discount || 0.0,
    images: product ? [{ file: { size: 0, type: 'image/jpg' } }] : [],
  };

  const helper = {
    onSubmit: async (values: IForm, { resetForm }: FormikHelpers<IForm>) => {
      if (product) {
        const { images, ...payload } = values;
        await action(token.id, product._id, payload);
        return;
      }

      await action(token.id, values, null);
      resetForm();
    },
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={helper.onSubmit}
      enableReinitialize
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
          {product ? null : <Images formik={formik} />}
          <Separator className='my-5' />
          <Buttons isLoading={status.isLoading} />

          <FormError error={status.state === 'error' ? status.error : null} />
        </Form>
      )}
    </Formik>
  );
};
