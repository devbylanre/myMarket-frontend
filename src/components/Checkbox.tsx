import { AnimatePresence, motion } from 'framer-motion';
import React, { HTMLAttributes, forwardRef, useContext } from 'react';
import { LuCheck } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { FormContext } from './Form';

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Checkbox = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...rest } = props;
  const {
    helper,
    meta: { touched, value },
  } = useContext(FormContext)!;

  const toggle = () => {
    !touched && helper.setTouched(true);
    helper.setValue(!value);
  };

  return (
    <div
      ref={ref}
      className={twMerge(
        'bg-white rounded-md ring-1 ring-zinc-950/10 cursor-pointer h-4 w-4 flex items-center justify-center shadow-sm',
        value && 'bg-green-600 ring-green-200',
        className
      )}
      {...rest}
      onClick={toggle}
    >
      <AnimatePresence>
        {value && (
          <motion.span
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: [1, 0] }}
          >
            <LuCheck className='w-4 h-4 p-[1px] stroke-white' />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
});
