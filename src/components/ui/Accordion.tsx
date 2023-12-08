import { AnimatePresence, MotionProps, motion } from 'framer-motion';
import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {}

export const Accordion = ({ className, ...rest }: AccordionProps) => {
  return (
    <div
      className={twMerge('flex flex-col space-y-2 pb-2', className)}
      {...rest}
    />
  );
};

interface AccordionTriggerProps extends AccordionProps {
  onToggle: () => void;
}

export const AccordionTrigger = ({
  className,
  onToggle,
  ...rest
}: AccordionTriggerProps) => {
  return (
    <div
      className={twMerge(
        'inline-flex items-center justify-between h-8 cursor-pointer',
        className
      )}
      onClick={onToggle}
      {...rest}
    />
  );
};

interface AccordionContentProps extends MotionProps {
  className?: string;
  isVisible: boolean;
  children: React.ReactNode;
}

export const AccordionContent = ({
  isVisible,
  className,
  children,
  ...rest
}: AccordionContentProps) => {
  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
          className={twMerge('', className)}
          {...rest}
        >
          <div>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
