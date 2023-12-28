import React, { useRef } from 'react';
import { Card } from '../../../../components/ui/Card';
import { Text } from '../../../../components/ui/Text';
import { ImageCard } from './ImageCard';
import { Button } from '../../../../components/ui/Button';
import { LuFolderMinus } from 'react-icons/lu';

export const Images = ({ formik }: { formik: Record<string, any> }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  console.log(formik);

  const helper = {
    change: (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!formik.touched.images) {
        formik.setTouched({ images: true });
      }

      // check if files has a value and the length is greater than 0
      if (files && files.length > 0) {
        const processedImages = Array.from(files).map((file) => {
          const url = URL.createObjectURL(file);
          return {
            url: url,
            file: file,
          };
        });

        formik.setFieldValue('images', [
          ...formik.values.images,
          ...processedImages,
        ]);
      }
    },

    toMb: (data: number) => {
      return data / (1024 * 1024);
    },

    excerpt: (text: string, length: number) => {
      return text.length > length
        ? text.slice(0, length) + '...'
        : text.slice(0, length);
    },

    pop: (name: string) => {
      const filter = formik.values.images.filter(
        (image: any) => image.file.name !== name
      );

      formik.setFieldValue('images', [...filter]);
    },
  };

  return (
    <div className='space-y-5'>
      <input
        ref={inputRef}
        type='file'
        name='images'
        className='hidden'
        multiple
        onChange={(e) => helper.change(e)}
      />

      <Card className='flex items-center p-0 cursor-pointer ring-0 gap-x-3'>
        <Text
          as='h6'
          size='sm'
        >
          Click to upload images
        </Text>
        <Button
          variant='outline'
          size='xs'
          type='button'
          onClick={() => inputRef.current?.click()}
        >
          Choose files
        </Button>
      </Card>

      <div className='space-y-2'>
        {formik.values.images && formik.values.images.length > 0 ? (
          formik.values.images.map((image: any, i: number) => (
            <ImageCard
              key={i}
              image={image}
              excerpt={helper.excerpt}
              toMb={helper.toMb}
              pop={helper.pop}
            />
          ))
        ) : (
          <EmptyState />
        )}
      </div>

      {formik.touched.images ? <Error error={formik.errors.images} /> : null}
    </div>
  );
};

const Error = ({ error }: { error: string }) => {
  if (!error) return null;

  return (
    <Text
      as='p'
      size='sm'
      className='text-red-500'
    >
      {error}
    </Text>
  );
};

const EmptyState = () => {
  return (
    <div className='flex flex-col items-center justify-center h-40 rounded-lg bg-zinc-100'>
      <LuFolderMinus className='w-5 h-5 stroke-zinc-500' />
      <Text
        as='p'
        size='sm'
      >
        No images uploaded yet
      </Text>
    </div>
  );
};
