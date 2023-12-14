import { AnimatePresence, MotionProps, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface DropdownProps extends MotionProps {
  className?: string;
  isVisible: boolean;
}

export const Dropdown = (props: DropdownProps) => {
  const { className, isVisible, ...rest } = props;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={twMerge(
            'absolute left-0 flex w-full p-1 bg-white border rounded-md shadow-md shadow-zinc-100 border-zinc-200 top-12',
            className
          )}
          {...rest}
        />
      )}
    </AnimatePresence>
  );
};
