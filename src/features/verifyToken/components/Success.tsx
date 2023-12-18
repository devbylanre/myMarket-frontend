import React from 'react';
import { Link } from 'react-router-dom';
// icon
import { LuHeartHandshake } from 'react-icons/lu';

// components
import { Button } from '../../../components/ui/Button';
import {
  CardTitle,
  CardDescription,
  CardContent,
} from '../../../components/ui/Card';

export const Success = () => {
  return (
    <div className='flex flex-col items-center gap-y-5'>
      <LuHeartHandshake className='w-12 h-12 bg-green-200 rounded-full p-1.5' />
      <CardContent className='space-y-1 text-center'>
        <CardTitle weight={600}>Account verification successful</CardTitle>
        <CardDescription>
          You are now a verified member, continue to sign in to log into your
          account explore the community
        </CardDescription>
      </CardContent>

      <Link to='/auth'>
        <Button>Continue to Sign in</Button>
      </Link>
    </div>
  );
};
