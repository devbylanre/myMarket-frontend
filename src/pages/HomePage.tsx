import React from 'react';
import { ProductCard } from '../components/templates/ProductCard';

export const HomePage = () => {
  return (
    <div className='grid grid-cols-1 gap-2 px-3 py-8 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-3 xl:grid-cols-3'>
      <ProductCard />
    </div>
  );
};
