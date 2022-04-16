import React, { FC } from "react";
import Presenter from "./presenter";
import { SearchAreaType } from "./type";

const SearchArea: FC<SearchAreaType> = ({ setSearchName, removeAllTodos }) => {
  return (
    <Presenter setSearchName={setSearchName} removeAllTodos={removeAllTodos} />
  );
};

export default SearchArea;
