import { useUpdateUser } from '../../../../hooks/useUpdateUser';

export const useUpdateMobile = () => {
  const { resource, updateUser } = useUpdateUser();

  return { resource, updateMobile: updateUser };
};
