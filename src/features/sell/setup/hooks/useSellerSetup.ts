import { useUpdateUser } from '../../../../hooks/useUpdateUser';

export const useSellerSetup = () => {
  const { resource, updateUser } = useUpdateUser();

  return { resource, sellerSetup: updateUser };
};
