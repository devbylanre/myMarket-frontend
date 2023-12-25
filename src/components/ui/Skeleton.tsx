import { motion, MotionProps } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface ISkeleton extends MotionProps {
  className?: string;
}

export const Skeleton = ({ className, ...rest }: ISkeleton) => {
  return (
    <motion.div
      animate={{ backgroundColor: ['#FCFCFC', '#F8F8F8', '#F1F1F1'] }}
      transition={{ duration: 1, repeat: Infinity }}
      className={twMerge('w-full h-full', className)}
      {...rest}
    />
  );
};
