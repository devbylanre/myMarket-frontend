import { Badge } from '../../components/ui/Badge';
import { Text } from '../../components/ui/Text';

export const Header = () => {
  return (
    <div className='sticky top-0 inline-flex items-center justify-between w-full h-12 px-3 border-b lg:px-12 border-b-zinc-200 bg-white/50 backdrop-blur-sm'>
      <div>
        <Text
          as='h5'
          weight={500}
          size='md'
          className='text-primary'
        >
          Components
          <Text
            as='span'
            size='xs'
            className='ml-1'
          >
            v1.1
          </Text>
        </Text>
      </div>

      <div>
        <div className='inline-flex items-center gap-x-2'>
          <Text
            as='h6'
            size='sm'
          >
            Created by Technical
          </Text>
          <Badge>Hire us</Badge>
        </div>
      </div>
    </div>
  );
};
