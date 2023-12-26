import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const Images = ({ images }: { images: Record<string, any>[] }) => {
  const [selectedImage, setSelectedImage] = useState<Record<string, any>>(
    images[0]
  );

  return (
    <div>
      <img
        src={selectedImage.url}
        alt={selectedImage.name}
        className='object-cover w-full ring-1 ring-zinc-950/5 h-[280px] sm:h-[360px] rounded-lg'
      />

      <div className='inline-flex mt-5 gap-x-3'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.name}
            className={twMerge(
              'w-12 h-12 rounded-lg ring-zinc-950/10 ring-1 cursor-pointer hover:scale-110',
              selectedImage.name === image.name && 'ring-zinc-950 '
            )}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};
