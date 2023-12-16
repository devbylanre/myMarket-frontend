import React, {
  useEffect,
  createContext,
  useState,
  useContext,
  HTMLAttributes,
} from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/util';
import { AnimatePresence, MotionProps, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type VerticalPosition = 'top' | 'bottom';
type HorizontalPosition = 'left' | 'center' | 'right';

const toastVariants = cva(
  'absolute p-2 m-5 bg-white ring-1 rounded-md shadow-lg shadow-zinc-950/5 w-full sm:w-96',
  {
    variants: {
      variant: {
        danger: 'bg-red-100 ring-red-200',
        success: 'ring-green-600',
        dark: 'bg-zinc-800 ring-zinc-500',
        light: 'bg-white ring-zinc-950/10',
        warning: 'bg-amber-100 ring-amber-200',
      },
      position: {
        'top-left': 'top-0 start-0',
        'top-center': 'top-0 start-1/2 -translate-x-1/2',
        'top-right': 'top-0 right-0',
        center: 'top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2',
        'bottom-left': 'bottom-0 left-0',
        'bottom-center': 'bottom-0 start-1/2 -translate-x-1/2',
        'bottom-right': 'bottom-0 right-0',
      },
    },
    defaultVariants: {
      variant: 'light',
      position: 'bottom-right',
    },
  }
);

interface ToastContextProps {
  isVisible: boolean;
  onDismiss: () => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

interface ToastProps extends MotionProps, VariantProps<typeof toastVariants> {
  autoHide: boolean;
  className?: string;
  timeout?: number;
  position?: `${VerticalPosition}-${HorizontalPosition}`;
  variant: 'success' | 'danger' | 'light' | 'warning' | 'dark';
}

export const Toast = (props: ToastProps) => {
  const {
    className,
    timeout,
    position = 'bottom-right',
    variant,
    autoHide = false,
    ...rest
  } = props;
  const [isVisible, setIsVisible] = useState<boolean>(!autoHide);

  const onDismiss = () => setIsVisible(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => onDismiss(), timeout || 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, timeout]);

  return (
    <ToastContext.Provider value={{ isVisible, onDismiss: onDismiss }}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(toastVariants({ variant, position, className }))}
            {...rest}
          />
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
};

interface ToastContentProps extends HTMLAttributes<HTMLDivElement> {}
export const ToastContent = ({ className, ...rest }: ToastContentProps) => {
  return (
    <div
      className={twMerge('w-full', className)}
      {...rest}
    />
  );
};

interface ToastDismissProps extends HTMLAttributes<HTMLDivElement> {}
export const ToastDismiss = ({ className, ...rest }: ToastDismissProps) => {
  const { onDismiss } = useContext(ToastContext)!;

  return (
    <div
      onClick={() => onDismiss()}
      className={twMerge('', className)}
      {...rest}
    />
  );
};
