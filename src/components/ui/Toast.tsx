import React, {
  useEffect,
  createContext,
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
  'p-2 m-4 absolute w-full sm:w-[320px] rounded-xl shadow-lg shadow-zinc-100',
  {
    variants: {
      variant: {
        danger: 'bg-red-100',
        success: 'bg-green-100',
        light: 'bg-white',
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
  isVisible: boolean;
  onDismiss: () => void;
  className?: string;
  timeout?: number;
  position?: `${VerticalPosition}-${HorizontalPosition}`;
}

export const Toast = (props: ToastProps) => {
  const {
    className,
    timeout,
    position = 'top-right',
    variant,
    isVisible,
    onDismiss,
    ...rest
  } = props;

  useEffect(() => {
    let timer: any;
    if (isVisible) {
      timer = setTimeout(() => onDismiss(), timeout || 4000);
    }
    return () => clearTimeout(timer);
  }, [timeout, isVisible, onDismiss]);

  return (
    <ToastContext.Provider value={{ isVisible, onDismiss }}>
      <AnimatePresence initial={false}>
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
      className={twMerge('w-full h-full', className)}
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
      className={cn(className)}
      {...rest}
    />
  );
};
