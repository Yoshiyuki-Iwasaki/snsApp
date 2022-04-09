import React from "react";
import Button from "../../atoms/button";
import { Main } from "./style";
import Input from "../../atoms/input";

const Presenter = ({ setSearchName, removeAllTodos }) => {
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
