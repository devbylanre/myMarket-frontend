import { Product } from '../../../../contexts/product.types';
import { useCreateProduct } from './useCreateProduct';
import { useUpdateProduct } from './useUpdateProduct';

export const useProduct = (product: Product | null) => {
  const { status, createProduct } = useCreateProduct();
  const { updateStatus, updateProduct } = useUpdateProduct();

  return product
    ? { status: updateStatus, action: updateProduct }
    : { status: status, action: createProduct };
};
