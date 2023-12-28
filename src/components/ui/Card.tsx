import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { Text } from './Text';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = ({ className, ...rest }: CardProps) => {
  return (
    <div
      className={twMerge(
        'p-3 bg-white rounded-lg ring-1 ring-zinc-950/10 transition-all duration-200 ease-in-out w-full',
        className
      )}
      {...rest}
    />
  );
};

interface CardImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const CardImage = ({ className, src, alt, ...rest }: CardImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={twMerge('w-full rounded-md object-cover', className)}
      {...rest}
    />
  );
};

interface CardTitleProps extends HTMLAttributes<HTMLHeadElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: string;
  weight?: number;
}

export const CardTitle = ({
  as,
  size,
  weight,
  className,
  ...rest
}: CardTitleProps) => {
  return (
    <Text
      as={as || 'h5'}
      size={(size as 'md') || 'xl'}
      weight={(weight as 600) || 500}
      className={className}
      {...rest}
    />
  );
};

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = ({
  className,
  ...rest
}: CardDescriptionProps) => {
  return (
    <Text
      as='p'
      size={'sm'}
      className={twMerge('text-zinc-800', className)}
      {...rest}
    />
  );
};

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const CardHeader = ({ className, ...rest }: CardHeaderProps) => {
  return (
    <div
      className={twMerge('w-full', className)}
      {...rest}
    />
  );
};

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}
export const CardContent = ({ className, ...rest }: CardContentProps) => {
  return (
    <div
      className={twMerge('w-full', className)}
      {...rest}
    />
  );
};

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}
export const CardFooter = ({ className, ...rest }: CardFooterProps) => {
  return (
    <div
      className={twMerge('flex w-full', className)}
      {...rest}
    />
  );
};
