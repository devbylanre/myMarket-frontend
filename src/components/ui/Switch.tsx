import React from 'react';
import { useField } from 'formik';
import { twMerge } from 'tailwind-merge';

interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export const Switch = ({ name, ...rest }: SwitchProps) => {
  const [, meta, helper] = useField(name);
  return (
    <div
      className={twMerge(
        'w-9 h-5 bg-zinc-100 rounded-full border border-zinc-200 flex flex-col justify-center',
        meta.value && 'bg-green-500 border-green-500'
      )}
      {...rest}
    >
      <div
        className={twMerge(
          'w-4 h-4 bg-white rounded-full cursor-pointer transition-all duration-200 ease-in-out shadow-xl shadow-zinc-800',
          meta.value && 'translate-x-[18px] shadow-green-800'
        )}
        onClick={() => helper.setValue(!meta.value)}
      ></div>
    </div>
  );
};
