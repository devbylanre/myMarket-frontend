import { useUpdate } from '../../../../hooks/user/useUpdate';

export const useUpdateStoreName = () => {
  const { status, update } = useUpdate();

  return { status, updateStoreName: update };
};
