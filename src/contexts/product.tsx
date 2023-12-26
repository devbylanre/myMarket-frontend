import React, { createContext, useEffect, useReducer } from 'react';
import { State, Action, ProductContextProps, Product } from './product.types';

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
  const user = JSON.parse(localStorage.getItem('user')!);

  useEffect(() => {
    const helper = {
      fetchProducts: async () => {
        const response = await fetch(
          `http://localhost:5000/api/v1/user/fetch/products/${user._id}`
        );

        const json = await response.json();

        if (response.ok) {
          dispatch({ type: 'SET', payload: json.data });
        }
      },
    };

    helper.fetchProducts();
  }, [user._id]);

  return (
    <ProductContext.Provider value={{ products: state.products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
