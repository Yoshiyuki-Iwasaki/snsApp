import React, { FC } from 'react';
import Presenter from './presenter';
import { SearchAreaType } from './type';

const SearchArea: FC<SearchAreaType> = ({ setSearchName }) => {
  return <Presenter setSearchName={setSearchName} />;
};

export default SearchArea;
