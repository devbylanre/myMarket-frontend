import { useUpdateUser } from '../../../../hooks/useUpdateUser';

export const useUpdateBilling = () => {
  const { resource, updateUser } = useUpdateUser();

  return { resource, updateBilling: updateUser };
};
