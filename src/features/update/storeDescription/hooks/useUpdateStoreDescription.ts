import { useUpdateUser } from '../../../../hooks/useUpdateUser';

export const useUpdateStoreDescription = () => {
  const { resource, updateUser } = useUpdateUser();

  return { resource, updateStoreDescription: updateUser };
};
