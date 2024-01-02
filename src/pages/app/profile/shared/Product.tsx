import { Link, useOutletContext } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '../../../../components/ui/Card';
import { Text } from '../../../../components/ui/Text';
import { Product } from '../../../../contexts/product.types';
import { LuPenLine, LuTrash } from 'react-icons/lu';
import { useDelete } from '../../../../hooks/product/useDelete';
import { User } from '../../../../contexts/user.types';
import { Toast, ToastContent } from '../../../../components/ui/Toast';
import { Spinner } from '../../../../components/ui/Spinner';

export const ProductCard = ({
  product,
  userId,
}: {
  product: Product;
  userId: string;
}) => {
  const helper = {
    excerpt: (data: string, length: number) => {
      return data.length > length ? data.slice(0, length) + '...' : data;
    },

    getPrice: (price: number, discount: number) => {
      return price - price * (discount / 100);
    },
  };

  return (
    <Card className='relative flex flex-col p-0 gap-y-3 ring-0'>
      <Link to={`/app/shop/product/${product._id}`}>
        <img
          src={product.images[0].url}
          alt={product.title}
          className='object-cover w-full h-48 bg-white rounded-lg cursor-pointer ring-1 ring-zinc-950/10'
        />
      </Link>
      <CardContent className='space-y-3'>
        <Text
          as='h5'
          weight={500}
          size='sm'
        >
          {helper.excerpt(product.title, 28)}
        </Text>
      </CardContent>
      <CardFooter className='flex items-center justify-between gap-x-3'>
        <Link to={`/app/sell/${product._id}`}>
          {userId === product.user ? (
            <LuPenLine className='w-4 h-4 cursor-pointer stroke-zinc-500 hover:stroke-primary' />
          ) : null}
        </Link>

        {userId === product.user ? <TrashProduct id={product._id} /> : null}
      </CardFooter>
    </Card>
  );
};

const TrashProduct = ({ id }: { id: string }) => {
  const { status, deleteProduct } = useDelete();
  const { token } = useOutletContext()! as User;

  return (
    <>
      <div
        className='flex justify-end flex-1 cursor-pointer text-zinc-500 hover:text-red-500'
        onClick={async () => await deleteProduct(token.id, id)}
      >
        {!status.isLoading ? (
          <>
            <LuTrash className='w-4 h-4' />

            {status.state === 'success' && (
              <Toast>
                <ToastContent>
                  <Text
                    as='p'
                    size='sm'
                  >
                    Product deleted successfully
                  </Text>
                </ToastContent>{' '}
              </Toast>
            )}
          </>
        ) : (
          <Spinner
            variant='default'
            className='w-4 h-4'
          />
        )}
      </div>
    </>
  );
};
