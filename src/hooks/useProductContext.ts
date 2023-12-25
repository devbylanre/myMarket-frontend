import { useContext } from 'react';
import { ProductContext } from '../contexts/product.context';

export const useProductContext = () => {
  const context = useContext(ProductContext);

  console.log('product context', context);
  return context;
};
