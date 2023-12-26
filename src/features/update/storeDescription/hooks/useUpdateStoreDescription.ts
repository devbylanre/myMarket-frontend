import { useUpdate } from '../../../../hooks/user/useUpdate';

export const useUpdateStoreDescription = () => {
  const { status, update } = useUpdate();

  return { status, updateStoreDescription: update };
};
