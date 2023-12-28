import React, { useRef, useState } from 'react';
import { useUploadPhoto } from './hooks/useUploadPhoto';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { useOutletContext } from 'react-router-dom';
import { Photo } from './components/Photo';
import { Upload } from './components/Upload';
import { User } from '../../../contexts/user.types';
import { FormError } from '../../../components/templates/FormError';

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
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { status, uploadPhoto } = useUploadPhoto();
  const photoRef = useRef<HTMLInputElement | null>(null);

  const helper = {
    submit: async (values: IForm) => {
      await uploadPhoto(_id, values.photo);
    },
    change: (e: React.ChangeEvent<HTMLInputElement>, setValue: any) => {
      setValue('photo', e.target.files![0]);
      setIsSelected(true);
    },
  };

  return (
    <Formik
      initialValues={{ photo: undefined }}
      validationSchema={validationSchema}
      onSubmit={helper.submit}
    >
      {(formik) => (
        <>
          <Form>
            <div className='flex items-center gap-x-2'>
              <Photo
                url={photo.url}
                firstName={firstName}
                lastName={lastName}
              />
              <Upload
                isSelected={isSelected}
                click={() => photoRef.current?.click()}
              />
            </div>

            <input
              ref={photoRef}
              type='file'
              name='photo'
              className='hidden'
              onChange={(e) => helper.change(e, formik.setFieldValue)}
            />

            <FormError error={status.state === 'error' ? status.error : null} />
          </Form>
        </>
      )}
    </Formik>
  );
};
