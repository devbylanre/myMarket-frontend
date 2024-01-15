import { useOutletContext } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
} from '../../../../../../components/Card';
import { Text } from '../../../../../../components/Text';
import { Product } from '../../../../../../contexts/product.types';
import { useDelete } from '../../../../../../hooks/product/useDelete';
import { User } from '../../../../../../contexts/user.types';
import { Spinner } from '../../../../../../components/Spinner';
import { TbDotsVertical, TbTrash, TbPencil } from 'react-icons/tb';
import { Button } from '../../../../../../components/Button';
import {
  getDiscountedPrice,
  truncateString,
} from '../../../../../../lib/string';
import { Icon } from '../../../../../../components/Icon';
import { Div } from '../../../../../../components/Div';
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from '../../../../../../components/Dropdown';

interface Props {
  product: Product;
  userId: string;
}

const ProductOption = ({ id }: { id: string }) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant='ghost'
          size='icon'
        >
          <Icon icon={TbDotsVertical} />
        </Button>
      </DropdownTrigger>

      <DropdownContent className='w-40 -left-36'>
        <Text
          as='a'
          href={`/app/sell/${id}`}
        >
          <Button
            variant='ghost'
            className='justify-start w-full'
          >
            <Icon
              icon={TbPencil}
              className='w-4 h-4'
            />
            Edit
          </Button>
        </Text>

        <TrashProduct id={id} />
      </DropdownContent>
    </Dropdown>
  );
};

export const ProductCard = ({ product, userId }: Props) => {
  const { title, price, discount, _id } = product;

  const user = useOutletContext()! as User;

  return (
    <Card className='p-0 overflow-hidden rounded-lg bg-slate-50 ring-1 ring-zinc-950/10'>
      <CardHeader className='flex justify-between p-2'>
        <Div>
          <Text
            as='h6'
            size='xs'
            weight={600}
          >
            {truncateString(title, 25)}
          </Text>
          <Text
            as='p'
            size='xs'
            weight={500}
          >
            ₦ {getDiscountedPrice(price, discount).toLocaleString('en-US')}
          </Text>
        </Div>
        {user._id === product.user ? <ProductOption id={_id} /> : null}
      </CardHeader>
      <CardContent className='w-full h-56 overflow-clip'>
        <Text
          as='a'
          href={`/app/shop/product/${_id}`}
        >
          <img
            src={product.images[0].url}
            alt={product.images[0].name}
            className='object-cover w-full h-full'
          />
        </Text>
      </CardContent>
    </Card>
  );
};

const TrashProduct = ({ id }: { id: string }) => {
  const { status, deleteProduct } = useDelete();
  const { token } = useOutletContext()! as User;

  return (
    <Button
      variant='ghost'
      size='sm'
      className='justify-start w-full'
      onClick={() => deleteProduct(token.id, id)}
      disabled={status.isLoading ? status.isLoading : false}
    >
      {status.isLoading ? (
        <Spinner variant='dark' />
      ) : (
        <>
          <Icon
            icon={TbTrash}
            className='w-4 h-4'
          />
          Delete
        </>
      )}
    </Button>
  );
};
