import { Dispatch } from 'react';
import { User } from './user.types';

export interface Seller extends User {}

export interface Product {
  _id: string;
  title: string;
  description: string;
  tagline: string;
  category: string;
  price: number;
  discount: number;
  brand: string;
  model: string;
  images: Record<string, any>[];
  reviews: any[];
  user: string;
  seller?: Seller;
}

export interface Action<T> {
  type: 'CREATE' | 'UPDATE' | 'DELETE' | 'SET';
  payload: T;
}

export interface State {
  products: Product[];
}

export interface ProductContextProps<T> {
  products: Product[];
  dispatch: Dispatch<T>;
}
