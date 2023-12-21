import { useUpdateUser } from '../../../../hooks/useUpdateUser';

export const useUpdateSocial = () => {
  const { resource, updateUser } = useUpdateUser();

  return { resource, updateSocial: updateUser };
};
