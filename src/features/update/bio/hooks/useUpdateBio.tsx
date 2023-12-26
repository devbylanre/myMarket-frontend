import { useUpdate } from '../../../../hooks/user/useUpdate';

export const useUpdateBio = () => {
  const { status, update } = useUpdate();

  return { status, updateBio: update };
};
