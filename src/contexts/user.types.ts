import { Dispatch } from 'react';

export interface UserStore {
  name: string;
  description: string;
  followers: string[];
  location: {
    state: string;
    city: string;
    address: string;
  };
}

export interface UserBilling {
  country: string;
  state: string;
  city: string;
  address: string;
}

export interface UserPhoto {
  url: string;
  name: string;
}

export interface UserMobile {
  country: string;
  code: number;
  number: number;
}

export interface UserOTP {
  code: number;
  expiresAt: number;
}

export interface UserAccount {
  platform: string;
  url: string;
}

export interface UserToken {
  id: string;
  exp: number;
}

export interface User {
  _id: string;
  isSeller: boolean;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  mobile: UserMobile;
  otp: UserOTP;
  accounts: UserAccount[];
  token: UserToken;
  photo: UserPhoto;
  store: UserStore;
  billing: UserBilling;
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
