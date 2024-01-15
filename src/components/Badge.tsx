import React, {
  HTMLAttributes,
  createContext,
  forwardRef,
  useContext,
  useState,
} from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../lib/cn';
import { twMerge } from 'tailwind-merge';

interface BadgeContextProps {
  isVisible: boolean;
  hideBadge: () => void;
}

const BadgeContext = createContext<BadgeContextProps | undefined>(undefined);

const badgeVariants = cva(
  'rounded-lg px-2 h-6 w-fit font-medium text-xs ring-1 inline-flex gap-x-1 items-center',
  {
    variants: {
      variant: {
        solid: 'bg-primary-300 text-zinc-950 ring-primary-300',
        outline: 'ring-zinc-950/10 text-zinc-950 bg-white',
        danger: 'bg-red-500 text-white ring-red-500/20',
        warning: 'bg-amber-500 text-white ring-amber-500/20',
        success: 'bg-green-500 text-white ring-green-500/20',
      },
    },

    defaultVariants: {
      variant: 'outline',
    },
  }
);

interface Props extends HTMLAttributes<HTMLDivElement> {}

interface BadgeProps extends Props, VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (props: BadgeProps, ref) => {
    const { variant, className, ...rest } = props;
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const hideBadge = () => setIsVisible(false);

    if (!isVisible) return null;

    return (
      <BadgeContext.Provider value={{ isVisible, hideBadge }}>
        <div
          ref={ref}
          className={cn(badgeVariants({ variant, className }))}
          {...rest}
        />
      </BadgeContext.Provider>
    );
  }
);

export const BadgeDismiss = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, ...rest } = props;
  const { hideBadge } = useContext(BadgeContext)!;

  return (
    <div
      ref={ref}
      className={twMerge('cursor-pointer', className)}
      onClick={hideBadge}
      {...rest}
    />
  );
});
