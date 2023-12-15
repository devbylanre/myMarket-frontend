import React, { HtmlHTMLAttributes, useEffect, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/util';
import { AnimatePresence, MotionProps, motion } from 'framer-motion';

type VerticalPosition = 'top' | 'bottom';
type HorizontalPosition = 'left' | 'center' | 'right';

const toastVariants = cva(
  'absolute p-2 m-3 bg-white ring-1 rounded-md space-y-0.5 w-96 shadow-lg shadow-zinc-950/5 w-fit min-w-[200px]',
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

interface ToastProps extends MotionProps, VariantProps<typeof toastVariants> {
  className?: string;
  timeout?: number;
  onClose: () => void;
  isVisible: boolean;
  position?: `${VerticalPosition}-${HorizontalPosition}`;
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (props: ToastProps, ref) => {
    const {
      className,
      timeout,
      onClose,
      isVisible,
      variant,
      position,
      ...rest
    } = props;

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => onClose(), timeout || 4000);
        return () => clearTimeout(timer);
      }
    }, [isVisible, onClose, timeout]);

    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={ref}
            className={cn(toastVariants({ variant, position, className }))}
            {...rest}
          />
        )}
      </AnimatePresence>
    );
  }
);
