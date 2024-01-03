export const ShopPageLoader = () => {
  const helper = {
    fetchProducts: async () => {
      const response = await fetch(`https://mymarket-tan.vercel.app/product`, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      });

      if (!response.ok) {
        throw Error('Unable to fetch products');
      }

      return await response.json();
    },
  };

  return helper.fetchProducts();
};
