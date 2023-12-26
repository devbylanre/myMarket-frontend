import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '../../../../components/ui/Card';
import { Text } from '../../../../components/ui/Text';
import { Product } from '../../../../contexts/product.types';
import { LuPenLine, LuShare2, LuTrash } from 'react-icons/lu';

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className='relative flex flex-col gap-y-5 ring-0'>
      <Link to={`/app/product/${product._id}`}>
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
        <LuPenLine />
        <span className='flex-1'>
          <LuTrash className='w-4 h-4' />
        </span>
        <LuShare2 />
      </CardFooter>
    </Card>
  );
};
