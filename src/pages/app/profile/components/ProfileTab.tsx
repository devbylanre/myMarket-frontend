import React from 'react';
import {
  Tab,
  TabList,
  TabTrigger,
  TabContent,
} from '../../../../components/ui/Tab';
import { Store } from './tabs/store/Store';
import { UserStore } from '../../../../contexts/user.types';
import { SellerSetup } from '../../../../components/templates/SellerSetup';
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
      defaultTab='store'
      className='py-5 lg:mr-[30%] w-full lg:w-9/12 px-3 lg:px-8'
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
        className=''
      >
        {products && products.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4'>
            {products.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
                userId={userId}
              />
            ))}
          </div>
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
