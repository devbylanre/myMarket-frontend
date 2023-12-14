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
  const [field, , helper] = useField(name);

  const onToggle = () => {
    helper.setTouched(true);
    helper.setValue(!field.value);
  };

  return (
    <div
      className={twMerge(
        'bg-white border rounded border-zinc-200 cursor-pointer h-4 w-4 flex items-center justify-center shadow-sm',
        field.value && 'bg-green-100 border-green-200',
        className
      )}
      {...rest}
      onClick={onToggle}
    >
      <AnimatePresence>
        {field.value && (
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
