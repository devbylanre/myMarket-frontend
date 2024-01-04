import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Product } from '../../../contexts/product.types';
import { Images } from './components/Images';
import { Details } from './components/Details';
import { SellerInformation } from './components/Seller';
import { ProductTab } from './components/Tab';
import { Helmet } from 'react-helmet-async';

export const ProductPage = () => {
  const product = useLoaderData() as Product;

  return (
    <>
      <Helmet>
        <title>Shop - {product.title}</title>
        <meta
          name='description'
          content={product.tagline}
        />
        <meta
          name='keywords'
          content={
            product.title
              .split(' ')
              .map((key) => key + '|')
              .join('') as any
          }
        />
      </Helmet>

      {product && (
        <div className='px-3 mx-auto my-12 lg:w-11/12 lg:px-0'>
          <div className='flex flex-col gap-8 lg:gap-12 lg:flex-row'>
            <Images images={product.images} />
            <div className='basis-full'>
              <Details
                title={product.title}
                tagline={product.tagline}
                category={product.category}
                brand={product.brand}
                model={product.model}
                price={(
                  product.price -
                  (product.price * product.discount) / 100
                ).toFixed(2)}
              />
              <SellerInformation seller={product.seller} />
            </div>
          </div>
          <ProductTab description={product.description} />
        </div>
      )}
    </>
  );
};
