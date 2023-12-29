import React from 'react';
import { ProductCard } from '../../components/templates/ProductCard';
import { Helmet } from 'react-helmet-async';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Shop - myMarket</title>
        <meta
          name='description'
          content='hey there!'
        />
        <meta
          name='keywords'
          content='shop|mymarket'
        />
      </Helmet>

      <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-3 xl:grid-cols-3'>
        <ProductCard />
      </div>
    </>
  );
};
