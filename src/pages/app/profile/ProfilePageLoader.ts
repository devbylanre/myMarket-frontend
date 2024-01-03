export const ProfilePageLoader = async ({ params }: { params: any }) => {
  const fetchUserData = async () => {
    const response = await fetch(
      `https://mymarket-tan.vercel.app/user/${params.id}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw Error('Unable to fetch user data');
    }

    return response.json();
  };

  const fetchUserProducts = async () => {
    const response = await fetch(
      `https://mymarket-tan.vercel.app/user/products/${params.id}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }
    );

    return response.json();
  };

  const user = await fetchUserData();
  const products = await fetchUserProducts();

  return { user: user.data, products: products.data || [] };
};
