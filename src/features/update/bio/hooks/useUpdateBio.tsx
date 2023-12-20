import { useUpdateUser } from '../../../../hooks/useUpdateUser';

export const useUpdateBio = () => {
  const { resource, updateUser } = useUpdateUser();

  return { resource, updateBio: updateUser };
};
