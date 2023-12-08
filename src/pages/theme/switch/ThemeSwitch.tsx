import React, { useState } from 'react';
import { ThemeCard, ThemeHeader, ThemeTab } from '../Theme';
import { Text } from '../../../components/ui/Text';
import { Formik, Form } from 'formik';
import { Switch } from '../../../components/ui/Switch';

export const ThemeSwitch = () => {
  return (
    <div className='flex flex-col gap-y-12'>
      <ThemeHeader>
        <Text as='p'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          deleniti voluptas aliquam quas, quos ab, delectus numquam esse ratione
          sed eum! Culpa voluptatum vel, saepe rerum enim iusto ad facere?
        </Text>
      </ThemeHeader>

      <FormSwitch />
    </div>
  );
};

const FormSwitch = () => {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className='flex flex-col gap-y-8'>
      <div>
        <Text
          as='h5'
          size='lg'
          weight={500}
        >
          Switch
        </Text>
        <Text
          as='p'
          size='sm'
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus,
          qui maiores laboriosam natus error neque possimus laborum nulla, iusto
          tempora eveniet deserunt, voluptas repudiandae esse magni architecto.
          Voluptas, quisquam doloribus?
        </Text>
      </div>

      <ThemeTab
        tab={tab}
        setTab={setTab}
      />

      <ThemeCard tab={tab}>
        <Formik
          initialValues={{ read: false }}
          onSubmit={() => {}}
        >
          <Form>
            <Switch name='read' />
          </Form>
        </Formik>
      </ThemeCard>
    </div>
  );
};
