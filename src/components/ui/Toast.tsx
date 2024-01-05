import React, {
  useEffect,
  createContext,
  useContext,
  HTMLAttributes,
  useState,
} from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/util';
import { AnimatePresence, MotionProps, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type VerticalPosition = 'top' | 'bottom';
type HorizontalPosition = 'left' | 'center' | 'right';

const toastVariants = cva('p-2 sm:p-5 absolute w-full sm:w-80  z-50', {
  variants: {
    position: {
      'top-left': 'top-0 left-0',
      'top-center': 'top-0 start-1/2 -translate-x-1/2',
      'top-right': 'top-0 right-0',
      center: 'top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2',
      'bottom-left': 'bottom-0 left-0',
      'bottom-center': 'bottom-0 start-1/2 -translate-x-1/2',
      'bottom-right': 'bottom-0 right-0',
    },
  },
  defaultVariants: {
    position: 'top-left',
  },
});

interface ToastContextProps {
  isVisible: boolean;
  onDismiss: () => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

interface ToastProps extends MotionProps, VariantProps<typeof toastVariants> {
  className?: string;
  timeout?: number;
  position?: `${VerticalPosition}-${HorizontalPosition}`;
}

export const Toast = (props: ToastProps) => {
  const { className, timeout, position, ...rest } = props;

  const [isVisible, setIsVisible] = useState<boolean>(true);

  const onDismiss = () => setIsVisible(false);

  useEffect(() => {
    let timer: any;
    if (isVisible) {
      timer = setTimeout(() => onDismiss(), timeout || 4000);
    }
    return () => clearTimeout(timer);
  }, [timeout, isVisible]);

  return (
    <ToastContext.Provider value={{ isVisible, onDismiss }}>
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            animate={{ opacity: [0, 1], x: [20, 0] }}
            exit={{ opacity: [1, 0], x: [0, -20] }}
            className={cn(toastVariants({ position, className }))}
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
      className={twMerge(
        'w-full bg-white p-2 ring-1 rounded-lg ring-zinc-950/10 shadow-lg',
        className
      )}
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
