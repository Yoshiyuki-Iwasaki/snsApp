import React from "react";
import Presenter from "./presenter";

const SearchArea = ({ setSearchName, removeAllTodos }) => {
  return (
    <Presenter setSearchName={setSearchName} removeAllTodos={removeAllTodos} />
  );
};

export default SearchArea;
