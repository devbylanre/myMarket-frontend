export const ProductPageLoader = ({ params }: { params: any }) => {
  const helper = {
    token: () => {
      const user = JSON.parse(localStorage.getItem('user')!);
      return user.token.id;
    },

    product: async (token: string) => {
      const response = await fetch(
        `https://mymarket-tan.vercel.app/product/${params.id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const json = await response.json();

      if (!response.ok) {
        throw new Error('Unable to fetch product');
      }

      return json.data;
    },
  };

  return helper.product(helper.token());
};
