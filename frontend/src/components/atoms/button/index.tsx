import React, { FC } from 'react';
import { ButtonType } from './type';
import { ButtonLayout } from './style';

const Button: FC<ButtonType> = ({ children, ...buttonProps }) => {
  return <ButtonLayout {...buttonProps}>{children}</ButtonLayout>;
};

export default Button;
