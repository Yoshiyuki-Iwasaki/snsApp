import React, { FC } from "react";
import Button from "../../atoms/button";
import { Main } from "./style";
import Input from "../../atoms/input";
import { SearchAreaType } from "./type";

const Presenter: FC<SearchAreaType> = ({ setSearchName }) => {
  return (
    <Main>
      <Input
        placeholder="Search todo."
        onChange={e => {
          setSearchName(e.target.value);
        }}
      />
    </Main>
  );
};

export default Presenter;
