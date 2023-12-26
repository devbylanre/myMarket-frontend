import { useUpdate } from '../../../../hooks/user/useUpdate';

export const useUpdateBilling = () => {
  const { status, update } = useUpdate();

  return { status, updateBilling: update };
};
