import { Params } from 'react-router-dom';
import { User } from '../../../contexts/user.types';
import { getUserFromLocalStorage } from '../../../utils/string';

export const ProductPageLoader = ({ params }: { params: Params }) => {
  const { token } = getUserFromLocalStorage() as User;

  const getProduct = async () => {
    try {
      const response = await fetch(
        `https://mymarket-tan.vercel.app/product/${params.id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.id}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }

      const json = await response.json();
      return json.data;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message);
    }
  };

  return getProduct();
};
