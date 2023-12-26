import { useUpdate } from '../../../../hooks/user/useUpdate';

export const useUpdateName = () => {
  const { status, update } = useUpdate();

  return { status, updateNames: update };
};
