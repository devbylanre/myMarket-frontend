import { useUpdateUser } from '../../../../hooks/useUpdateUser';

export const useUpdateStoreLocation = () => {
  const { resource, updateUser } = useUpdateUser();

  return { resource, updateStoreLocation: updateUser };
};
