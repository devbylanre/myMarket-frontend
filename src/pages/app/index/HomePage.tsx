import React from 'react';
import { ProductCard } from './ProductCard';
import { Helmet } from 'react-helmet-async';
import {
  Tab,
  TabContent,
  TabList,
  TabTrigger,
} from '../../../components/ui/Tab';
import { useLoaderData } from 'react-router-dom';
import { Product } from '../../../contexts/product.types';

export const HomePage = () => {
  const { data }: any = useLoaderData();

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

      <div className='p-8'>
        <ProductFilter products={data} />

        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'></div>
      </div>
    </>
  );
};

const ProductFilter = ({ products }: { products: Product[] }) => {
  return (
    <Tab defaultTab='recent'>
      <TabList>
        <TabTrigger value='recent'>Recent</TabTrigger>
        <TabTrigger value='hot'>Hot</TabTrigger>
      </TabList>
      <TabContent
        value='recent'
        className='grid grid-cols-5'
      >
        {products && products.length > 0
          ? products.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
              />
            ))
          : null}
      </TabContent>
    </Tab>
  );
};

export const ProductsLoader = () => {
  const helper = {
    fetchProducts: async () => {
      const response = await fetch(
        `http://localhost:5000/api/v1/product/fetch/all`,
        {
          method: 'GET',
          headers: { 'content-type': 'application/json' },
        }
      );

      return await response.json();
    },
  };

  return helper.fetchProducts();
};
