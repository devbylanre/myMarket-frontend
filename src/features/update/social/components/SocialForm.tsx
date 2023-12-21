import React from 'react';
import { FieldArray } from 'formik';
import {
  FormField,
  FormControl,
  FormMessage,
} from '../../../../components/ui/Form';
import { Input } from '../../../../components/ui/Input';
import { LuLink2, LuX, LuPlus } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/Select';

export const SocialForm = () => {
  const iconClassName =
    'bg-zinc-100 rounded-lg w-5 h-5 p-0.5 text-zinc-500 cursor-pointer';

  return (
    <FieldArray name='accounts'>
      {(fieldArrayProps) => {
        console.log(fieldArrayProps);
        const { push, remove, form } = fieldArrayProps;
        const accounts = form.values.accounts;

        return (
          <div className='space-y-3'>
            {accounts.map((account: Record<string, any>, i: number) => (
              <div
                key={i}
                className='grid w-full grid-cols-6 gap-x-3'
              >
                <SelectField index={i} />
                <FormField
                  className='col-span-3'
                  name={`accounts[${i}].url`}
                >
                  <FormControl>
                    <LuLink2 className='self-center ml-2 text-zinc-500' />
                    <Input
                      placeholder='Enter your social account link'
                      className='h-8'
                    />
                  </FormControl>
                  <FormMessage />
                </FormField>
                <div className='inline-flex items-center gap-x-2'>
                  {accounts.length > 1 ? (
                    <LuX
                      onClick={() => remove(i)}
                      className={twMerge(
                        iconClassName,
                        'hover:bg-red-100 hover:text-red-500'
                      )}
                    />
                  ) : null}

                  <LuPlus
                    onClick={() => {
                      accounts.length < 5 && push({ platform: '', url: '' });
                    }}
                    className={twMerge(
                      iconClassName,
                      'hover:bg-green-100 hover:text-green-500'
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        );
      }}
    </FieldArray>
  );
};

const SelectField = ({ index }: { index: number }) => {
  const platforms: string[] = [
    'Google',
    'WhatsApp',
    'Twitter',
    'Instagram',
    'Facebook',
    'Others',
  ];

  return (
    <FormField
      className='col-span-2'
      name={`accounts[${index}].platform`}
    >
      <Select>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder='Select platform' />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {platforms.map((platform, i) => (
            <SelectItem
              key={i}
              value={platform}
              className='flex items-center h-8 px-2 text-sm rounded-md text-zinc-500 hover:bg-zinc-100'
            >
              {platform}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormField>
  );
};
