import React from 'react';
import {
  Tab,
  TabList,
  TabTrigger,
  TabContent,
} from '../../../../components/ui/Tab';
import { useProductContext } from '../../../../hooks/useProductContext';
import { Store } from './Store';
import { UserStore } from '../../../../contexts/user.types';
import { SellerSetup } from '../../../../components/templates/SellerSetup';
import { ProductCard } from './Product';
import { ProductsEmptyState } from './ProductsEmptyState';

interface ProfileTabProps {
  isSeller: boolean;
  store: UserStore;
}

export const ProfileTab = ({ isSeller, store }: ProfileTabProps) => {
  const { products } = useProductContext()!;

  return (
    <Tab
      defaultTab='store'
      className='col-span-3 py-5 basis-full'
    >
      <TabList className='mx-auto'>
        <TabTrigger value='store'>Store</TabTrigger>
        <TabTrigger value='products'>Products</TabTrigger>
        <TabTrigger value='Community'>Community</TabTrigger>
      </TabList>
      <TabContent value='store'>
        {isSeller ? <Store store={store} /> : <SellerSetup />}
      </TabContent>
      <TabContent value='products'>
        {products && products.length > 0 ? (
          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
            {products.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
              />
            ))}
          </div>
        ) : (
          <ProductsEmptyState />
        )}
      </TabContent>
    </Tab>
  );
};
