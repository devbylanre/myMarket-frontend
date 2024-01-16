import { VariantProps, cva } from 'class-variance-authority';
import React, {
  createContext,
  forwardRef,
  HTMLAttributes,
  useContext,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { cn } from '../lib/cn';

interface AlertContextProps {
  isVisible: boolean;
  onDismiss: () => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

const alertVariant = cva(
  'w-full p-2 flex rounded-lg flex-wrap transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        success: 'bg-green-50',
        danger: 'bg-red-50',
        warning: 'bg-amber-50',
        ghost: 'bg-white',
      },
    },
    defaultVariants: {
      variant: 'ghost',
    },
  }
);

interface Props extends HTMLAttributes<HTMLDivElement> {}

interface AlertProps extends Props, VariantProps<typeof alertVariant> {}

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { variant, className, ...rest } = props;
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <AlertContext.Provider
      value={{
        isVisible,
        onDismiss: () => setIsVisible(false),
      }}
    >
      <div
        ref={ref}
        className={cn(
          alertVariant({ variant, className }),
          isVisible
            ? 'opacity-100 visible translate-x-0'
            : 'opacity-0 invisible -translate-x-4'
        )}
        {...rest}
      />
    </AlertContext.Provider>
  );
});

export const AlertContent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div
      ref={ref}
      className={twMerge('w-full', className)}
      {...rest}
    />
  );
});

interface AlertDismissProps extends HTMLAttributes<HTMLDivElement> {}

export const AlertDismiss = forwardRef<HTMLDivElement, AlertDismissProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    const { onDismiss } = useContext(AlertContext)!;

    return (
      <div
        ref={ref}
        className={twMerge('cursor-pointer', className)}
        onClick={onDismiss}
        {...rest}
      />
    );
  }
);
