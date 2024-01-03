import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

export const Avatar = ({
  className,
  children,
  src,
  alt,
  ...rest
}: AvatarProps) => {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => setHasError(true);

  return (
    <div
      className={twMerge(
        'w-8 h-8 rounded-full bg-white overflow-clip ring-1 ring-zinc-950/10',
        className
      )}
      {...rest}
    >
      {hasError ? (
        children
      ) : (
        <img
          className='object-cover w-full h-full'
          src={src}
          alt={alt}
          onError={handleError}
        />
      )}
    </div>
  );
};

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AvatarFallback = ({ className, ...rest }: AvatarFallbackProps) => {
  return (
    <div
      className={twMerge(
        'bg-zinc-100 w-full h-full flex flex-col items-center justify-center',
        className
      )}
      {...rest}
    />
  );
};
