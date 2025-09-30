import React from 'react';
import { Form as AntForm } from 'antd';
import type { FormProps as AntFormProps } from 'antd';

export type FormProps = AntFormProps & {
  children: React.ReactNode;
  className?: string;
};

export const Form: React.FC<FormProps> & {
  Item: typeof AntForm.Item;
  useForm: typeof AntForm.useForm;
} = ({ children, className = '', ...props }) => {
  return (
    <AntForm {...props} className={className}>
      {children}
    </AntForm>
  );
};

Form.Item = AntForm.Item;
Form.useForm = AntForm.useForm;
