import React from 'react';
import { Field } from '@atlaskit/form';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button/standard-button';

export default function AddTask() {
  return (
    <>
      <Field id="name" name="name" label="Имя таска">
        {({ fieldProps }) => (
          <Textfield
            {...fieldProps}
            defaultValue="Task"
            value={undefined}
          />
        )}
      </Field>
      <Button type="submit" appearance="primary">
        Добавить
      </Button>
    </>
  )
};
