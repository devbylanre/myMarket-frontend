import React from 'react';
import { LuCheck, LuPlus } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { Spinner } from '../../../../components/ui/Spinner';

interface UploadProps {
  click: () => void;
  isLoading: boolean | null;
  isSelected: boolean;
}

export const Upload = ({ click, isLoading, isSelected }: UploadProps) => {
  return (
    <>
      {isLoading ? (
        <Spinner
          variant='primary'
          className='w-5 h-5'
        />
      ) : (
        <motion.button
          type={isSelected ? 'submit' : 'button'}
          className={twMerge(
            'flex items-center justify-center w-5 h-5 p-1 text-zinc-950 rounded-full cursor-pointer bg-zinc-200 hover:bg-zinc-200/80',
            isSelected && 'bg-green-500 text-white hover:bg-green-600'
          )}
          disabled={isLoading!}
        >
          {isSelected ? (
            <LuCheck />
          ) : (
            <LuPlus
              className='w-full h-full'
              onClick={click}
            />
          )}
        </motion.button>
      )}
    </>
  );
};
