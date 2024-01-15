import React from 'react';
import {
  Tab,
  TabList,
  TabTrigger,
  TabContent,
} from '../../../../components/Tab';
import { ProductCard } from './tabs/products/Product';
import { EmptyState } from './tabs/products/EmptyState';
import { Product } from '../../../../contexts/product.types';
import { Community } from './tabs/community/Community';

interface ProfileTabProps {
  products: Product[];
  userId: string;
}

export const ProfileTab = ({ userId, products }: ProfileTabProps) => {
  return (
    <Tab
      defaultValue='products'
      className='px-3 lg:px-8'
    >
      <TabList className='mx-auto'>
        <TabTrigger value='products'>Products</TabTrigger>
        <TabTrigger value='community'>Community</TabTrigger>
      </TabList>
      <TabContent
        value='products'
        className='grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3'
      >
        {products && products.length > 0 ? (
          products.map((product, i) => (
            <ProductCard
              key={i}
              product={product}
              userId={userId}
            />
          ))
        ) : (
          <EmptyState />
        )}
      </TabContent>
      <TabContent value='community'>
        <Community />
      </TabContent>
    </Tab>
  );
};
