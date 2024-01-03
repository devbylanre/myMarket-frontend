export const ProfilePageLoader = async ({ params }: { params: any }) => {
  const helper = {
    fetchUserData: async () => {
      const response = await fetch(
        `https://mymarket-tan.vercel.app/user/${params.id}`
      );

      if (!response.ok) {
        throw Error('Unable to fetch user data');
      }

      return await response.json();
    },

    fetchUserProducts: async () => {
      const response = await fetch(
        `https://mymarket-tan.vercel.app/user/products/${params.id}`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
          },
        }
      );

      return await response.json();
    },
  };

  const user = await helper.fetchUserData();
  const products = await helper.fetchUserProducts();

  return { user: user.data, products: products.data || [] };
};
