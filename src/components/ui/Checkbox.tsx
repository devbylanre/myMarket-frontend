import { useField } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import React, { HTMLAttributes } from 'react';
import { LuCheck } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';

interface CheckboxProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  className?: string;
}

export const Checkbox = ({ name, className, ...rest }: CheckboxProps) => {
  const [field, meta, helper] = useField(name);

  return (
    <div
      className={twMerge(
        'bg-white border rounded-md border-zinc-200 cursor-pointer h-5 w-5 flex items-center justify-center shadow shadow-secondary/5',
        className
      )}
      {...rest}
      onClick={() => helper.setValue(!meta.value)}
    >
      <AnimatePresence>
        {field.value === true && (
          <motion.span
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: [1, 0] }}
          >
            <LuCheck className='w-3.5 h-3.5 stroke-green-600' />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};
