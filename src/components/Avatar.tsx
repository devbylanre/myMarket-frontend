import { VariantProps, cva } from 'class-variance-authority';
import React, {
  HTMLAttributes,
  ImgHTMLAttributes,
  createContext,
  forwardRef,
  useContext,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { cn } from '../lib/cn';

interface AvatarContextProps {
  error: boolean;
  onError: () => void;
}

const AvatarContext = createContext<AvatarContextProps | null>(null);

interface Props extends HTMLAttributes<HTMLDivElement> {}

const avatarVariants = cva(
  ' rounded-full bg-white overflow-clip ring-1 ring-zinc-950/5',
  {
    variants: {
      size: {
        xs: 'w-7 h-7',
        sm: 'w-8 h-8',
        md: 'w-9 h-9',
        lg: 'w-10 h-10',
        xl: 'w-11 h-11',
      },
    },

    defaultVariants: {
      size: 'md',
    },
  }
);

interface AvatarProps extends Props, VariantProps<typeof avatarVariants> {}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { className, size, ...rest } = props;
  const [error, setError] = useState<boolean>(false);

  const onError = () => setError(true);

  return (
    <AvatarContext.Provider value={{ error, onError }}>
      <div
        ref={ref}
        className={cn(avatarVariants({ size, className }))}
        {...rest}
      />
    </AvatarContext.Provider>
  );
});

interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  (props, ref) => {
    const { className, alt, src, ...rest } = props;
    const { error, onError } = useContext(AvatarContext)!;

    if (error) return null;

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={twMerge('w-full h-full object-cover', className)}
        onError={onError}
        {...rest}
      />
    );
  }
);

export const AvatarFallback = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { className, ...rest } = props;
    const { error } = useContext(AvatarContext)!;

    if (!error) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={twMerge(
          'bg-zinc-100 w-full h-full flex items-center justify-center font-medium text-base',
          className
        )}
        {...rest}
      />
    );
  }
);
