import React, { FC } from 'react';
import { InputType } from './type';
import { Input } from '@chakra-ui/react';

const Presenter: FC<InputType> = ({ onChange, placeholder, value, name }) => {
  return (
    <Input
      type="text"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Presenter;
