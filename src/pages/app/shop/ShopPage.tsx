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

export const ShopPage = () => {
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

      <div className='mx-3 mt-8 sm:m-8'>
        <ProductFilter products={data} />

        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'></div>
      </div>
    </>
  );
};

const ProductFilter = ({ products }: { products: Product[] }) => {
  return (
    <Tab defaultTab='recent'>
      <TabList className='mx-auto'>
        <TabTrigger value='recent'>Recent</TabTrigger>
        <TabTrigger value='hot'>Hot</TabTrigger>
      </TabList>
      <TabContent
        value='recent'
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5'
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
