import { Dispatch } from 'react';

export interface UserStore {
  store: {
    name: string;
    description: string;
    followers: string[];
    location: {
      state: string;
      city: string;
      address: string;
    };
  };
}
export interface User extends UserStore {
  _id: string;
  isSeller: boolean;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  mobile: { country: string; countryCode: number; number: number };
  billing: {
    country: string;
    state: string;
    city: string;
    address: string;
  };
  otp: {
    code: number;
    expiresAt: number;
  };
  savedProducts: string[];
  accounts: { platform: string; url: string }[];
  token: {
    id: string;
    exp: number;
  };
  verification: {
    token: string;
    verified: true;
  };
  photo: {
    url: string;
    name: string;
  };
}

export interface Action<T> {
  type: 'SIGN_IN' | 'SIGN_OUT' | 'UPDATE';
  payload: T;
}

export interface State {
  user: User | null;
}
export interface Context<T> {
  user: User | null;
  dispatch: Dispatch<T>;
}
