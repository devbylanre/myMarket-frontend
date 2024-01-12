import React, {
  useEffect,
  createContext,
  useContext,
  HTMLAttributes,
  useState,
  forwardRef,
} from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/util';
import { AnimatePresence, motion } from 'framer-motion';
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

const ToastContext = createContext<ToastContextProps | null>(null);

interface Props extends HTMLAttributes<HTMLDivElement> {}

interface ToastProps extends Props, VariantProps<typeof toastVariants> {
  timeout?: number;
  position?: `${VerticalPosition}-${HorizontalPosition}`;
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
  const { className, timeout, position, ...rest } = props;
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isVisible) {
      timer = setTimeout(() => setIsVisible(false), timeout || 4000);
    }
    return () => clearTimeout(timer!);
  }, [timeout, isVisible]);

  return (
    <ToastContext.Provider
      value={{ isVisible, onDismiss: () => setIsVisible(false) }}
    >
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            animate={{ opacity: [0, 1], x: [20, 0] }}
            exit={{ opacity: [1, 0], x: [0, -20] }}
          >
            <div
              ref={ref}
              className={cn(toastVariants({ position, className }))}
              {...rest}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
});

export const ToastContent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div
      ref={ref}
      className={twMerge(
        'w-full bg-white p-2 ring-1 rounded-lg ring-zinc-950/10 shadow-lg',
        className
      )}
      {...rest}
    />
  );
});

export const ToastDismiss = forwardRef<HTMLDivElement, Props>((props) => {
  const { className, ...rest } = props;
  const { onDismiss } = useContext(ToastContext)!;

  return (
    <div
      onClick={() => onDismiss()}
      className={cn(className)}
      {...rest}
    />
  );
});
