import React, { FC } from "react";
import Button from "../../atoms/button";
import { Main } from "./style";
import Input from "../../atoms/input";
import { SearchAreaType } from "./type";

const Presenter: FC<SearchAreaType> = ({ setSearchName, removeAllTodos }) => {
  return (
    <Main>
      <Input
        placeholder="Search todo."
        onChange={e => {
          setSearchName(e.target.value);
        }}
      />
      <Button onClick={removeAllTodos}>Remove All</Button>
    </Main>
  );
};

export default Presenter;
