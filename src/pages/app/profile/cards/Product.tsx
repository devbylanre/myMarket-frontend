import { Link, useOutletContext } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '../../../../components/ui/Card';
import { Text } from '../../../../components/ui/Text';
import { Product } from '../../../../contexts/product.types';
import { LuPenLine, LuShare2, LuTrash } from 'react-icons/lu';
import { useDelete } from '../../../../hooks/product/useDelete';
import { User } from '../../../../contexts/user.types';
import { Toast, ToastContent } from '../../../../components/ui/Toast';
import { Spinner } from '../../../../components/ui/Spinner';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className='relative flex flex-col gap-y-5 ring-0'>
      <Link to={`/app/shop/product/${product._id}`}>
        <img
          src={product.images[0].url as string}
          alt={product.title}
          className='object-cover w-full h-64 rounded-md cursor-pointer ring-1 ring-zinc-950/5'
        />
      </Link>
      <CardContent className='space-y-3'>
        <Text
          as='h5'
          weight={500}
          className='flex-1 cursor-pointer text-md sm:text-lg hover:underline'
        >
          {product.title}
        </Text>
      </CardContent>
      <CardFooter className='flex items-center justify-between gap-x-3'>
        <LuPenLine className='w-4 h-4 cursor-pointer stroke-zinc-500 hover:stroke-primary' />
        <LuShare2 className='w-4 h-4 cursor-pointer stroke-zinc-500 hover:stroke-primary' />

        <TrashProduct id={product._id} />
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
            variant='primary'
            className='w-4 h-4'
          />
        )}
      </div>
    </>
  );
};
