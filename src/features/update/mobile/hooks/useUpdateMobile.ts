import { useUpdate } from '../../../../hooks/user/useUpdate';

export const useUpdateMobile = () => {
  const { status, update } = useUpdate();

  return { status, updateMobile: update };
};
