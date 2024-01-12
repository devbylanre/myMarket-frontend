import React from 'react';
import {
  Tab,
  TabList,
  TabTrigger,
  TabContent,
} from '../../../../components/Tab';
import { Store } from './tabs/store/Store';
import { UserStore } from '../../../../contexts/user.types';
import { SellerSetup } from '../../../../templates/SellerSetup';
import { ProductCard } from './tabs/products/Product';
import { EmptyState } from './tabs/products/EmptyState';
import { Product } from '../../../../contexts/product.types';
import { Community } from './tabs/community/Community';

interface ProfileTabProps {
  isSeller: boolean;
  store: UserStore;
  products: Product[];
  userId: string;
}

export const ProfileTab = ({
  isSeller,
  userId,
  products,
  store,
}: ProfileTabProps) => {
  return (
    <Tab
      defaultValue='store'
      className='lg:w-9/12 lg:mr-[30%] py-5'
    >
      <TabList className='mx-auto'>
        <TabTrigger value='store'>Store</TabTrigger>
        <TabTrigger value='products'>Products</TabTrigger>
        <TabTrigger value='community'>Community</TabTrigger>
      </TabList>
      <TabContent value='store'>
        {isSeller ? <Store store={store} /> : <SellerSetup />}
      </TabContent>
      <TabContent
        value='products'
        className='space-y-5'
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
