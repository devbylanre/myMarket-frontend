import React, { HtmlHTMLAttributes, useEffect, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/util';

type VerticalPosition = 'top' | 'bottom';
type HorizontalPosition = 'left' | 'center' | 'right';

const toastVariants = cva(
  'absolute flex flex-col p-3 m-3 bg-white border rounded-md space-y-0.5 shadow w-96',
  {
    variants: {
      variant: {
        danger: 'bg-red-100 border-red-200 shadow-red-800/10',
        success: 'bg-green-100 border-green-200 shadow-green-800/10',
        dark: 'bg-zinc-800 border-zinc-500 shadow-zinc-800/10',
        light: 'bg-white border-zinc-200 shadow-zinc-800/10',
        warning: 'bg-amber-100 border-amber-200 shadow-amber-800/10',
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

interface ToastProps
  extends HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
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
        const timer = setTimeout(() => onClose(), timeout || 5000);
        return () => clearTimeout(timer);
      }
    }, [isVisible, onClose, timeout]);

    return (
      <>
        {isVisible && (
          <div
            ref={ref}
            className={cn(toastVariants({ variant, position, className }))}
            {...rest}
          />
        )}
      </>
    );
  }
);
