import { TbMenu } from 'react-icons/tb';
import { Div } from '../../components/Div';
import { Text } from '../../components/Text';
import { useState } from 'react';
import { Menu } from './Menu';
import { Logo } from '../../templates/Logo';
import { Button } from '../../components/Button';
import { TbMessageShare } from 'react-icons/tb';
import { Icon } from '../../components/Icon';

const Links = () => {
  const items = [
    { name: 'docs', url: '' },
    { name: 'examples', url: '' },
    { name: 'github', url: 'https://github.com/devbylanre/mymarket-frontend' },
  ];

  return (
    <Div
      layout='hidden'
      className='flex-row justify-center flex-1 hidden gap-x-4 lg:flex'
    >
      {items.map((item) => (
        <Text
          as='a'
          href={item.url}
          target='_blank'
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

const Brand = () => {
  return (
    <Div
      layout={'flex'}
      className='items-center gap-x-2'
    >
      <Logo />
      <Text
        size='md'
        weight={600}
      >
        MyMarket
      </Text>
    </Div>
  );
};

export const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <header className='sticky top-0 z-10 inline-flex items-center justify-between w-full h-12 px-3 border-b lg:px-5 border-b-zinc-200 bg-white/70 backdrop-blur-sm gap-x-4'>
      <Brand />
      <Links />
      <Div
        layout='flex'
        className='items-center gap-x-2.5'
      >
        <Div
          className='block lg:hidden'
          onClick={() => setIsVisible(!isVisible)}
        >
          <Button
            variant='ghost'
            size='icon'
          >
            <Icon
              icon={TbMenu}
              className='w-5 h-5'
            />
          </Button>
          {isVisible ? (
            <Div className='absolute left-0 w-full h-screen p-3 mt-2 bg-white'>
              <Menu />
              <Links />
            </Div>
          ) : null}
        </Div>

        <Text
          as='a'
          target='_blank'
          href='https://wa.link/wnkuz9'
        >
          <Button
            variant='ghost'
            size='icon'
          >
            <Icon
              icon={TbMessageShare}
              className='w-5 h-5'
            />
          </Button>
        </Text>
      </Div>
    </header>
  );
};
