import React, { createContext, useEffect, useReducer } from 'react';
import { State, Action, ProductContextProps, Product } from './product.types';
import { useUserContext } from '../hooks/useUserContext';

const defaultState: State = { products: [] };

const reducer = <T extends Product>(state: State, action: Action<T>) => {
  switch (action.type) {
    case 'CREATE':
      return {
        products: [...state.products, { ...action.payload }],
      };

    case 'UPDATE':
      return {
        products: state.products.map((product) => {
          return product._id === action.payload._id
            ? { ...product, ...action.payload }
            : product;
        }),
      };

    case 'DELETE':
      const updatedProducts = state.products.filter((product) => {
        return product._id !== action.payload._id;
      });

      return { products: [...updatedProducts] };

    case 'SET':
      return { products: Array.isArray(action.payload) ? action.payload : [] };
    default:
      return state;
  }
};

export const ProductContext = createContext<ProductContextProps<
  Action<Product>
> | null>(null);

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { user } = useUserContext()!;

  useEffect(() => {
    const helper = {
      fetchProducts: async (id: string | null) => {
        try {
          const response = await fetch(
            `https://mymarket-tan.vercel.app/user/products/${id}`
          );

          const json = await response.json();

          if (!response.ok) {
            throw Error('Unable to fetch user products');
          }

          dispatch({ type: 'SET', payload: json.data });
        } catch (error: any) {
          console.error(error.message);
        }
      },
    };

    user && user.isSeller && helper.fetchProducts(user?._id);
  }, [user]);

  return (
    <ProductContext.Provider value={{ products: state.products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
