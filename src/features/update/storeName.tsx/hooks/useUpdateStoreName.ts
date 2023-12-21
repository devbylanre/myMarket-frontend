import { useUpdateUser } from '../../../../hooks/useUpdateUser';

export const useUpdateStoreName = () => {
  const { resource, updateUser } = useUpdateUser();

  return { resource, updateStoreName: updateUser };
};
