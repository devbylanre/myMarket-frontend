import { useContext } from 'react';
import { ProductContext } from '../contexts/product';

export const useProductContext = () => {
  const context = useContext(ProductContext);

  console.log('product context', context);
  return context;
};
