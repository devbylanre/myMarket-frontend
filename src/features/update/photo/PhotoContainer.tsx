import React, { useRef, useState } from 'react';
import { useUploadPhoto } from './hooks/useUploadPhoto';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { Text } from '../../../components/ui/Text';
import { useOutletContext } from 'react-router-dom';
import { Photo } from './components/Photo';
import { Upload } from './components/Upload';
import { User } from '../../../contexts/user.types';
import { Button } from '../../../components/ui/Button';

interface IForm {
  photo: File | undefined;
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
  const { _id, photo, firstName, lastName } = useOutletContext() as User;

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const { status, uploadPhoto } = useUploadPhoto();

  const photoRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (values: IForm) => {
    await uploadPhoto(_id, values.photo);
    setIsSelected(false);
  };

  return (
    <Formik
      initialValues={{ photo: undefined }}
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
              onChange={(e) => {
                formik.setFieldValue('photo', e.target.files![0]);
                setIsSelected(true);
              }}
            />

            {isSelected && (
              <Button
                type='submit'
                variant='outline'
                size='xs'
                className='mt-2'
              >
                Upload
              </Button>
            )}

            <Text
              as='p'
              size='sm'
              className='mt-1 text-red-500'
            >
              {status.state === 'error'
                ? (status.error?.message as string)
                : formik.errors.photo}
            </Text>
          </Form>
        </>
      )}
    </Formik>
  );
};
