import { Link, useOutletContext } from 'react-router-dom';
import { Card, CardContent } from '../../../../../../components/Card';
import { Text } from '../../../../../../components/Text';
import { Product } from '../../../../../../contexts/product.types';
import { useDelete } from '../../../../../../hooks/product/useDelete';
import { User } from '../../../../../../contexts/user.types';
import { Spinner } from '../../../../../../components/Spinner';
import { TbPencil, TbTrash } from 'react-icons/tb';
import { Separator } from '../../../../../../components/Separator';
import { Button } from '../../../../../../components/Button';

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
    <Card className='p-0 ring-0'>
      <CardContent className='flex gap-4'>
        <img
          src={product.images[0].url}
          alt={product.images[0].name}
          className='object-cover w-16 h-16 rounded-lg ring-1 ring-zinc-950/10'
        />

        <div className='basis-full'>
          <Text
            as='h6'
            size='sm'
            weight={500}
          >
            {product.title}
          </Text>
          <Text
            as='p'
            size='xs'
            className='mt-1'
          >
            {helper.excerpt(product.description, 150)}
          </Text>

          {userId === product.user ? (
            <>
              <Separator />
              <div className='flex justify-between'>
                <Link to={`/sell/${product._id}`}>
                  <Button
                    size='xs'
                    variant='ghost'
                    className='text-xs cursor-pointer ring-0 hover:bg-zinc-50'
                  >
                    <TbPencil className='w-3.5 h-3.5' />
                    Edit
                  </Button>
                </Link>
                <TrashProduct id={product._id} />
              </div>
            </>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
};

const TrashProduct = ({ id }: { id: string }) => {
  const { status, deleteProduct } = useDelete();
  const { token } = useOutletContext()! as User;

  return (
    <Button
      variant='danger'
      size='xs'
      className='text-xs'
      onClick={() => deleteProduct(token.id, id)}
      disabled={status.isLoading ? status.isLoading : false}
    >
      {status.isLoading ? (
        <Spinner variant='dark' />
      ) : (
        <>
          Delete
          <TbTrash className='w-3.5 h-3.5' />
        </>
      )}
    </Button>
  );
};
