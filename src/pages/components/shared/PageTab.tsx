import React from 'react';
import { Card, CardContent } from '../../../components/Card';
import { Tab, TabContent, TabList, TabTrigger } from '../../../components/Tab';
import { Icon } from '../../../components/Icon';
import { TbCode, TbSend } from 'react-icons/tb';
import { Text } from '../../../components/Text';
import { Button } from '../../../components/Button';

interface PageTabProps {
  children: React.ReactNode;
}

const CodeTab = () => {
  return (
    <Card className='min-h-[400px] bg-zinc-50 flex items-center'>
      <CardContent className='flex flex-col items-center w-full mx-auto text-center sm:w-96'>
        <Icon
          icon={TbCode}
          className='w-9 h-9 stroke-primary-600'
        />
        <Text
          as='h4'
          size='lg'
          weight={500}
          className='mt-4'
        >
          Seems it's undefined
        </Text>
        <Text
          as='p'
          size='sm'
          className='mt-1.5'
        >
          We are working on making the code available for everyone, if you would
          like to learn more about our project, click on the link below
        </Text>

        <Text
          as='a'
          target='_blank'
          href='https://wa.link/wnkuz9'
        >
          <Button
            variant='outline'
            size='sm'
            className='mt-4'
          >
            <Icon icon={TbSend} />
            Chat with us
          </Button>
        </Text>
      </CardContent>
    </Card>
  );
};

export const PageTab = ({ children }: PageTabProps) => {
  return (
    <Tab
      defaultValue='preview'
      className='space-y-4'
    >
      <TabList className='mx-auto sm:w-96'>
        <TabTrigger value='preview'>Preview</TabTrigger>
        <TabTrigger value='code'>Code</TabTrigger>
      </TabList>
      <TabContent value='preview'>
        <Card className='flex ring-zinc-950/10 min-h-[400px] items-center justify-center p-5 ring-1'>
          <CardContent className='flex flex-col items-center w-full mx-auto md:w-96'>
            {children}
          </CardContent>
        </Card>
      </TabContent>
      <TabContent value='code'>
        <CodeTab />
      </TabContent>
    </Tab>
  );
};
