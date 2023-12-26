import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { Product } from '../../../contexts/product.types';
import { User } from '../../../contexts/user.types';
import { Images } from './cards/Images';
import { Details } from './cards/Details';
import { SellerInformation } from './cards/Seller';
import { Separator } from '../../../components/ui/Separator';
import {
  Tab,
  TabContent,
  TabList,
  TabTrigger,
} from '../../../components/ui/Tab';
import { Description } from './Description';

export const ProductPage = () => {
  const { id } = useParams();
  const { token } = useOutletContext()! as User;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const helper = {
      fetchProduct: async () => {
        const response = await fetch(
          `http://localhost:5000/api/v1/product/fetch/${id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token.id}`,
            },
          }
        );

        const json = await response.json();

        if (response.ok) {
          setProduct(json.data);
        }
      },
    };

    helper.fetchProduct();
  }, [id, token.id]);

  return (
    <div>
      {product && (
        <>
          <div className='grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3'>
            <>
              <Images images={product.images} />
              <div className='col-span-full md:col-span-2'>
                <Details
                  title={product.title}
                  tagline={product.tagline}
                  category={product.category}
                  brand={product.brand}
                  model={product.model}
                  price={(
                    product.price / product.discount +
                    product.price
                  ).toFixed(2)}
                />
                <Separator className='my-8' />
                <SellerInformation seller={product.seller} />
              </div>
            </>
          </div>
          <Separator className='my-8' />
          <Tab defaultTab='description'>
            <TabList>
              <TabTrigger
                value='description'
                className='px-3'
              >
                Description
              </TabTrigger>
              <TabTrigger
                value='reviews'
                className='px-3'
              >
                Reviews
              </TabTrigger>
            </TabList>
            <TabContent value='description'>
              <Description description={product.description} />
            </TabContent>
          </Tab>
        </>
      )}
    </div>
  );
};
