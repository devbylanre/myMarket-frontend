import { useUpdateUser } from '../../../../hooks/useUpdateUser';

export const useUpdateName = () => {
  const { resource, updateUser } = useUpdateUser();

  return { resource, updateNames: updateUser };
};
