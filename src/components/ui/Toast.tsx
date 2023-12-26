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

const toastVariants = cva(
  'p-2 m-4 absolute w-full sm:w-[320px] rounded-md shadow shadow-zinc-100',
  {
    variants: {
      variant: {
        danger: 'bg-red-50',
        success: 'bg-green-50',
        default: 'bg-white ring-1 ring-zinc-950/10',
        warning: 'bg-amber-50 ring-amber-200',
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
      variant: 'default',
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
    ...rest
  } = props;

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
            animate={{ opacity: [0, 1], y: [-200, 0] }}
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
      className={cn(className)}
      {...rest}
    />
  );
};
