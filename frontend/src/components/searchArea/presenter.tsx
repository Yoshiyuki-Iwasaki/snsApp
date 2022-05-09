import React, { FC } from 'react';
import { SearchAreaType } from './type';
import { Input } from '@chakra-ui/react';

const Presenter: FC<SearchAreaType> = ({ setSearchName }) => {
  return (
    <>
      <Input
        placeholder="Search post."
        onChange={(e) => {
          setSearchName(e.target.value);
        }}
      />
    </>
  );
};

export default Presenter;
