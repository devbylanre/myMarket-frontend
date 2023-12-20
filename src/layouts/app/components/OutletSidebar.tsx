import { Link } from 'react-router-dom';
import { Text } from '../../../components/ui/Text';
import { Button } from '../../../components/ui/Button';
import { LuPlus, LuStarHalf } from 'react-icons/lu';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { Separator } from '../../../components/ui/Separator';

const users = [
  { name: 'Jide gbolahan', reviews: 3.7, store: 'Amazing digital solution' },
  { name: 'Kamoru Usman', reviews: 4.5, store: 'Fancy systems' },
  { name: 'Olamide Gbenga', reviews: 4.3, store: 'Electa store' },
  { name: 'Femi tukay', reviews: 3.8, store: 'Tukay groceries' },
  { name: 'Buju shanumi', reviews: 4.2, store: 'Buju and Co.' },
];

export const OutletSidebar = () => {
  return (
    <>
      <div className='inline-flex items-center justify-between w-full'>
        <Text
          as='h5'
          weight={500}
        >
          Top Sellers
        </Text>

        <Button
          variant='outline'
          size='xs'
        >
          <LuPlus className='w-4 h-4' />
          Add Product
        </Button>
      </div>

      <Separator />

      <div className='flex flex-col gap-y-3'>
        {users.map((user, i) => (
          <Link
            key={i}
            to='/app/profile'
            className='inline-flex items-center gap-x-3'
          >
            <Avatar
              src={`/assets/images/memoji-0${i + 1}.png`}
              alt={`user${i}`}
              className='w-10 h-10'
            >
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div className='flex-1'>
              <Text
                as='h6'
                size='sm'
                weight={500}
                className='inline-flex items-center capitalize gap-x-2'
              >
                <span>{user.name}</span>
                <span className='inline-flex items-center'>
                  <LuStarHalf className='stroke-primary' />
                  {user.reviews}
                </span>
              </Text>

              <Text
                as='p'
                size='xs'
                className='text-zinc-600'
              >
                {user.store}
              </Text>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
