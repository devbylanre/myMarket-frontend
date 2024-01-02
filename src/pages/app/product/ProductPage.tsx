import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Product } from '../../../contexts/product.types';
import { Images } from './cards/Images';
import { Details } from './cards/Details';
import { SellerInformation } from './cards/Seller';
import { Separator } from '../../../components/ui/Separator';
import { ProductTab } from './Tab';
import { Helmet } from 'react-helmet-async';

export const ProductPage = () => {
  const payload: any = useLoaderData();
  const product = payload.data as Product;

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
        <div className='py-8'>
          <div className='grid w-full grid-cols-1 gap-12 px-3 mx-auto sm:px-8 lg:grid-cols-3'>
            <Images images={product.images} />
            <div className='col-span-full md:col-span-2'>
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
              <Separator className='my-8' />
              <SellerInformation seller={product.seller} />
            </div>
          </div>
          <Separator className='my-8' />
          <ProductTab description={product.description} />
        </div>
      )}
    </>
  );
};

export const ProductPageLoader = ({ params }: { params: any }) => {
  const helper = {
    getUserToken: () => {
      const user = JSON.parse(localStorage.getItem('user')!);
      return user.token.id;
    },

    fetchProduct: async (token: string) => {
      if (params.id) {
        return await fetch(
          `http://localhost:5000/api/v1/product/fetch/single/${params.id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
    },
  };

  return helper.fetchProduct(helper.getUserToken());
};
