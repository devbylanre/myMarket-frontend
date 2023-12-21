import { useUpdateUser } from '../../../../hooks/useUpdateUser';

export const useUpdateSeller = () => {
  const { resource, updateUser } = useUpdateUser();

  return { resource, updateSeller: updateUser };
};
