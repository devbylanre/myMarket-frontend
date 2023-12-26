import { useUpdate } from '../../../../hooks/user/useUpdate';

export const useUpdateSocial = () => {
  const { status, update } = useUpdate();

  return { status, updateSocial: update };
};
