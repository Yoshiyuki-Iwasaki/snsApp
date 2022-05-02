import React, { FC } from 'react';
import { SaveButtonType } from './type';
import { Button } from '@chakra-ui/react';

const Presenter: FC<SaveButtonType> = ({ children, ...buttonProps }) => {
  return (
    <Button colorScheme="green" {...buttonProps}>
      {children}
    </Button>
  );
};

export default Presenter;
