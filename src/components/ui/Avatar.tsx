import React, { forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { className, children, src, alt, ...rest } = props;
  const [hasError, setHasError] = useState<boolean>(false);

  const setError = () => setHasError(true);

  return (
    <div
      ref={ref}
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
          onError={setError}
        />
      )}
    </div>
  );
});

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AvatarFallback = forwardRef<HTMLDivElement, AvatarFallbackProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    return (
      <div
        ref={ref}
        className={twMerge(
          'bg-zinc-100 w-full h-full flex flex-col items-center justify-center',
          className
        )}
        {...rest}
      />
    );
  }
);
