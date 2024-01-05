export const ProfilePageLoader = async ({ params }: { params: any }) => {
  const userResponse = await fetch(
    `https://mymarket-tan.vercel.app/user/${params.id}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }
  );

  if (!userResponse.ok) {
    throw new Error('Unable to fetch user data');
  }

  const user = await userResponse.json();

  const productsResponse = await fetch(
    `https://mymarket-tan.vercel.app/user/products/${params.id}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    }
  );

  const products = await productsResponse.json();

  return { user: user.data, products: products.data };
};
