import React, {
  HTMLAttributes,
  createContext,
  forwardRef,
  useContext,
  useState,
} from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/util';
import { twMerge } from 'tailwind-merge';

const badgeVariants = cva(
  'rounded-lg px-1.5 h-6 w-fit font-medium text-xs ring-1 inline-flex gap-x-1 items-center',
  {
    variants: {
      variant: {
        solid: 'bg-primary-500 text-white ring-primary-600',
        outline: 'ring-zinc-950/10 text-zinc-950 bg-white',
        danger: 'bg-red-500 text-white ring-red-950/10 ring-inset',
        warning: 'bg-amber-500 text-white ring-amber-950/10',
        success: 'bg-green-500 text-white ring-green-950/10',
      },
    },

    defaultVariants: {
      variant: 'outline',
    },
  }
);

interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

interface BadgeContextProps {
  isVisible: boolean;
  hideBadge: () => void;
}

const BadgeContext = createContext<BadgeContextProps | undefined>(undefined);

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

interface BadgeDismissProps extends HTMLAttributes<HTMLSpanElement> {}

export const BadgeDismiss = ({ className, ...rest }: BadgeDismissProps) => {
  const { hideBadge } = useContext(BadgeContext)!;

  return (
    <span
      className={twMerge('cursor-pointer', className)}
      onClick={hideBadge}
      {...rest}
    />
  );
};
