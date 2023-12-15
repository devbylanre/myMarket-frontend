import React, { useState } from 'react';
import { Text } from '../../../components/ui/Text';
import {
  Card,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from '../../../components/ui/Card';
import { LuBookmark } from 'react-icons/lu';
import { Avatar, AvatarFallback } from '../../../components/ui/Avatar';
import { UtilHeader } from '../Util';

export const ThemeCardPage = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <UtilHeader>
        <Text as='p'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          dignissimos fugiat ullam recusandae mollitia ipsam nulla aspernatur
        </Text>
      </UtilHeader>
    </div>
  );
};

const ThisCard = () => {
  return;
};
