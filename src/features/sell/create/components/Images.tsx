import React, { useRef } from 'react';
import { Card, CardContent } from '../../../../components/ui/Card';
import { Text } from '../../../../components/ui/Text';
import { ImageCard } from './ImageCard';
import { Button } from '../../../../components/ui/Button';
import { TbPhotoCircle } from 'react-icons/tb';

export const Images = ({ formik }: { formik: Record<string, any> }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

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

      <div className='flex flex-col items-center gap-y-5'>
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
        <Button
          size='sm'
          variant='outline'
          type='button'
          onClick={() => inputRef.current?.click()}
        >
          Click to upload images
        </Button>
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
    <Card className='p-0 stroke-zinc-400 ring-0'>
      <CardContent className='flex flex-col items-center gap-y-3'>
        <TbPhotoCircle className='w-8 h-8 stroke-zinc-400' />

        <div className='space-y-1 text-center'>
          <Text
            as='h6'
            weight={500}
          >
            No image selected yet
          </Text>
          <Text
            as='p'
            size='sm'
          >
            Click on the button above to upload your product images
          </Text>
        </div>
      </CardContent>
    </Card>
  );
};
