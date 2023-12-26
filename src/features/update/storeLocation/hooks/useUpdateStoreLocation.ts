import { useUpdate } from '../../../../hooks/user/useUpdate';

export const useUpdateStoreLocation = () => {
  const { status, update } = useUpdate();

  return { status, updateStoreLocation: update };
};
