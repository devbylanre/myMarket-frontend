import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
} from '../../../../components/ui/Card';
import { LuUpload } from 'react-icons/lu';
import { Button } from '../../../../components/ui/Button';
import { Avatar, AvatarFallback } from '../../../../components/ui/Avatar';
import { Text } from '../../../../components/ui/Text';

export const Images = ({ formik }: { formik: Record<string, any> }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImages, setSelectedImages] = useState<any[]>([]);

  const helper = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;

      if (files!.length > 0) {
        formik.setFieldValue('images', files);

        const processedImages = Array.from(files!).map((file) => {
          const url = URL.createObjectURL(file);

          return {
            name: file.name,
            size: file.size,
            type: file.type,
            url: url,
          };
        });

        setSelectedImages(processedImages);
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

      <Card className='flex flex-col items-center p-2 py-5 gap-y-4 bg-primary/10 ring-0'>
        <motion.span>
          <LuUpload className='w-5 h-5' />
        </motion.span>
        <CardDescription>
          Click on the button below to upload your product images
        </CardDescription>
        <Button
          variant='outline'
          size='xs'
          type='button'
          onClick={() => inputRef.current?.click()}
        >
          Upload images
        </Button>
      </Card>

      {selectedImages &&
        selectedImages.length >= 1 &&
        selectedImages.map((data: any, i) => (
          <Card
            key={i}
            className='flex items-center p-0 overflow-visible rounded-none ring-0 bg-none gap-x-3'
          >
            <Avatar
              src={data.url}
              alt={data.name}
              className='w-10 h-10'
            >
              <AvatarFallback>kf</AvatarFallback>
            </Avatar>
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
    </div>
  );
};
