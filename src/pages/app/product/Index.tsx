import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Product } from '../../../contexts/product.types';
import { Images } from './components/Images';
import { Details } from './components/Details';
import { SellerInformation } from './components/Seller';
import { ProductTab } from './components/Tab';
import { Helmet } from 'react-helmet-async';
import { Div } from '../../../components/Div';

export const ProductPage = () => {
  const product = useLoaderData() as Product;

  if (!product) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Shop - {product.title || ''}</title>
        <meta
          name='description'
          content={product.tagline}
        />
        <meta
          name='keywords'
          content={product.title.split(' ').join(', ')}
        />
        <meta
          name='author'
          content={product.user}
        />
      </Helmet>

      <Div className=''>
        <Div className=''>
          <Images images={product.images} />
          <Div className='basis-full'>
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
          </Div>
        </Div>
        <ProductTab description={product.description} />
      </Div>
    </>
  );
};
