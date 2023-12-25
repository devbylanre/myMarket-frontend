import React, { useRef, useState } from 'react';
import { useUploadPhoto } from './hooks/useUploadPhoto';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { Text } from '../../../components/ui/Text';
import { useOutletContext } from 'react-router-dom';
import { IUser } from '../../../utils/types';
import { Photo } from './components/Photo';
import { Upload } from './components/Upload';

interface IForm {
  photo: File | null;
}

const validationSchema = yup.object().shape({
  photo: yup
    .mixed()
    .required('Select a photo')
    .test('file', 'Please select a .png, .jpg, or .jpeg file', (value: any) => {
      return ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
    })
    .test(
      'fileSize',
      'File size is too large, upload files less than 5MB',
      (value: any) => {
        return value.size <= 5 * 1024 * 1024;
      }
    ),
});

export const PhotoContainer = () => {
  const { _id, photo, firstName, lastName } = useOutletContext() as IUser;
  const initialValues: IForm = {
    photo: null,
  };

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const { response, uploadPhoto } = useUploadPhoto();

  const photoRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (
    values: IForm,
    { submitForm }: { submitForm: any }
  ) => {
    console.log('awaiting upload');
    await uploadPhoto(_id, values.photo);

    submitForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <>
          <Form>
            <div
              onMouseOver={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseOut={() => setIsHovered(false)}
              className='w-12 h-12 rounded-full cursor-pointer'
            >
              {!isHovered ? (
                <Photo
                  url={photo.url}
                  firstName={firstName}
                  lastName={lastName}
                />
              ) : (
                <Upload click={() => photoRef.current?.click()} />
              )}
            </div>

            <input
              ref={photoRef}
              type='file'
              name='photo'
              className='hidden'
              onChange={(e) =>
                formik.setFieldValue('photo', e.target.files![0])
              }
            />

            <Text
              as='p'
              size='sm'
              className='mt-1 text-red-500'
            >
              {response.state === 'error'
                ? (response.error?.message as string)
                : formik.errors.photo}
            </Text>
          </Form>
        </>
      )}
    </Formik>
  );
};
