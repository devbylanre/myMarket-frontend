import React, { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { FormContext } from './Form';

interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Switch = ({ className, ...rest }: SwitchProps) => {
  const { helper, value } = useContext(FormContext)!;

  return (
    <div
      className={twMerge(
        'w-9 h-5 bg-zinc-100 rounded-full border border-zinc-200 flex flex-col justify-center',
        value && 'bg-green-500 border-green-500',
        className
      )}
      {...rest}
    >
      <div
        className={twMerge(
          'w-4 h-4 bg-white rounded-full cursor-pointer transition-all duration-200 ease-in-out shadow-xl shadow-zinc-800',
          value && 'translate-x-[17.5px] shadow-green-800'
        )}
        onClick={() => helper.setValue(!value)}
      ></div>
    </div>
  );
};
