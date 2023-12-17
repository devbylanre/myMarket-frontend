import { VariantProps, cva } from 'class-variance-authority';
import { AnimatePresence, MotionProps, motion } from 'framer-motion';
import React, {
  createContext,
  HTMLAttributes,
  useContext,
  useEffect,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { cn } from '../../utils/util';

type AlertVariant = 'success' | 'warning' | 'danger' | 'default';

interface AlertContextProps {
  isVisible: boolean;
  onDismiss: () => void;
  timeout?: number;
  variant: AlertVariant;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  timeout?: number;
  variant?: AlertVariant;
}

export const Alert = (props: AlertProps) => {
  const { timeout, variant = 'default', className, ...rest } = props;

  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <AlertContext.Provider
      value={{
        variant,
        isVisible,
        onDismiss: () => setIsVisible(false),
        timeout,
      }}
    >
      <div
        className={twMerge('w-full space-y-5', className)}
        {...rest}
      />
    </AlertContext.Provider>
  );
};

const alertIconVariant = cva(
  'min-w-[24px] min-h-[24px] w-fit h-fit p-1 flex rounded-full',
  {
    variants: {
      variant: {
        success: 'bg-green-200 text-green-800 stroke-green-800',
        danger: 'bg-red-200 text-red-800 stroke-red-800',
        warning: 'bg-amber-200 text-amber-800 stroke-amber-800',
        default: 'bg-zinc-200 text-zinc-800 stroke-zinc-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface AlertIconProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertIconVariant> {}

export const AlertIcon = (props: AlertIconProps) => {
  const { variant } = useContext(AlertContext)!;
  const { className, ...rest } = props;

  return (
    <div
      className={cn(alertIconVariant({ variant, className }))}
      {...rest}
    />
  );
};

interface AlertDismissProps extends HTMLAttributes<HTMLDivElement> {}

export const AlertDismiss = ({ className, ...rest }: AlertDismissProps) => {
  const { onDismiss } = useContext(AlertContext)!;

  return (
    <div
      className={twMerge('cursor-pointer', className)}
      onClick={onDismiss}
      {...rest}
    />
  );
};

interface AlertContentProps extends MotionProps {
  className?: string;
}
export const AlertContent = ({ className, ...rest }: AlertContentProps) => {
  const { isVisible, timeout, onDismiss } = useContext(AlertContext)!;

  useEffect(() => {
    if (timeout) {
      const timer = setTimeout(() => onDismiss(), timeout);

      return () => clearTimeout(timer);
    }
  }, [onDismiss, timeout]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: '0%' }}
          animate={{ opacity: 1, height: '100%' }}
          exit={{ opacity: 0, height: '0%' }}
          transition={{ duration: 0.4 }}
          className={twMerge(
            'ring-1 ring-zinc-950/10 p-2 rounded-2xl',
            className
          )}
          {...rest}
        />
      )}
    </AnimatePresence>
  );
};
