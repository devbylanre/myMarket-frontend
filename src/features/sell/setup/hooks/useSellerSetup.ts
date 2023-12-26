import { useUpdate } from '../../../../hooks/user/useUpdate';

export const useSellerSetup = () => {
  const { status, update } = useUpdate();

  return { status, sellerSetup: update };
};
