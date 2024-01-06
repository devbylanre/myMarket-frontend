import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { FormContext } from './Form';

interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Switch = ({ className, ...rest }: SwitchProps) => {
  const {
    helper,
    field: { value },
  } = useContext(FormContext)!;

  return (
    <div
      className={twMerge(
        'w-9 h-5 bg-zinc-100 rounded-full ring-1 ring-zinc-950/10 flex flex-col justify-center',
        value && 'bg-green-600 ring-green-200',
        className
      )}
      {...rest}
    >
      <motion.div
        animate={value ? { x: '18.5px' } : { x: '0%' }}
        transition={{ duration: 0.2 }}
        className={twMerge(
          'w-4 h-4 bg-white rounded-full cursor-pointer transition-all duration-200 ease-in-out shadow-md shadow-zinc-950/10',
          value && 'shadow-green-950/20'
        )}
        onClick={() => helper.setValue(!value)}
      ></motion.div>
    </div>
  );
};
