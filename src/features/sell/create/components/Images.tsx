import React, { useRef, useState } from 'react';
import { Card, CardContent } from '../../../../components/ui/Card';
import { LuUpload } from 'react-icons/lu';
import { Text } from '../../../../components/ui/Text';

export const Images = ({ formik }: { formik: Record<string, any> }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImages, setSelectedImages] = useState<any[]>([]);

  const helper = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;

      if (files && files.length > 0) {
        const processedImages = Array.from(files).map((file) => {
          const url = URL.createObjectURL(file);

          return {
            name: file.name,
            size: file.size,
            type: file.type,
            url: url,
          };
        });

        setSelectedImages([...processedImages]);

        formik.setFieldValue('images', files);
      }
    },

    covertToMb: (data: number) => {
      return data / (1024 * 1024);
    },

    excerptText: (text: string, length: number) => {
      return text.length > length
        ? text.slice(0, length) + '...'
        : text.slice(0, length);
    },

    // pop: (name: string) => {
    //   const filter = selectedImages.filter((image) => image.name !== name);

    //   setSelectedImages(filter);

    //   formik.setFieldValue(
    //     'images',
    //     filter.map((image) => new File([image], image))
    //   );
    // },
  };

  return (
    <div className='space-y-5'>
      <input
        ref={inputRef}
        type='file'
        name='images'
        className='hidden'
        multiple
        onChange={(e) => helper.handleChange(e)}
      />

      <Card
        className='flex items-center p-0 cursor-pointer ring-0 gap-x-3'
        onClick={() => inputRef.current?.click()}
      >
        <LuUpload className='p-2 rounded-lg w-9 h-9 bg-primary/5 text-primary' />
        <Text
          as='h6'
          size='sm'
        >
          Click to upload images
        </Text>
      </Card>

      {selectedImages &&
        selectedImages.length >= 1 &&
        selectedImages.map((data: any, i) => (
          <Card
            key={i}
            className='flex items-center p-0 overflow-visible rounded-none ring-0 bg-none gap-x-3'
          >
            <img
              src={data.url}
              alt={data.name}
              className='w-12 h-12 rounded-lg ring-1 ring-zinc-950/5'
            />
            <CardContent className='flex-1'>
              <Text
                as='h6'
                size='sm'
                weight={500}
              >
                {helper.excerptText(data.name, 56)}
              </Text>
              <Text
                as='p'
                size='xs'
              >
                {data.type} - {helper.covertToMb(data.size).toFixed(2)} MB
              </Text>
            </CardContent>
          </Card>
        ))}

      {formik.errors.images ? (
        <Text
          as='p'
          size='sm'
          className='text-red-500'
        >
          {formik.errors.images}
        </Text>
      ) : null}
    </div>
  );
};
