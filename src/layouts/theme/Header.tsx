import { TbMenu } from 'react-icons/tb';
import { Div } from '../../components/Div';
import { Text } from '../../components/Text';
import { useState } from 'react';
import { Menu } from './Menu';

const Links = () => {
  const items = [
    { name: 'docs', url: '' },
    { name: 'examples', url: '' },
    { name: 'github', url: '' },
  ];

  return (
    <Div
      layout='flex'
      className='flex-row gap-x-4'
    >
      {items.map((item) => (
        <Text
          as='p'
          key={item.name}
          size='sm'
          className='px-2 py-1.5 capitalize transition-all duration-300 ease-in-out rounded-lg cursor-pointer hover:bg-zinc-100'
        >
          {item.name}
        </Text>
      ))}
    </Div>
  );
};

export const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <header className='sticky top-0 z-10 inline-flex items-center justify-between w-full h-12 px-3 border-b lg:px-12 border-b-zinc-200 bg-white/50 backdrop-blur-sm'>
      <Links />
      <Div
        className='block lg:hidden'
        onClick={() => setIsVisible(!isVisible)}
      >
        <TbMenu />
        {isVisible ? (
          <Div className='absolute left-0 w-full h-screen p-3 mt-3 bg-white'>
            <Menu />
          </Div>
        ) : null}
      </Div>
    </header>
  );
};
