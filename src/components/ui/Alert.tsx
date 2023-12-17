import { AnimatePresence, MotionProps, motion } from 'framer-motion';
import React, {
  createContext,
  HTMLAttributes,
  useContext,
  useEffect,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface AlertContextProps {
  isVisible: boolean;
  onDismiss: () => void;
  timeout?: number;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  timeout?: number;
}

export const Alert = (props: AlertProps) => {
  const { timeout, className, ...rest } = props;

  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <AlertContext.Provider
      value={{
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
