import React, { FC } from "react";
import { Main } from "./style";
import Input from "../../atoms/input";
import { SearchAreaType } from "./type";

const Presenter: FC<SearchAreaType> = ({ setSearchName }) => {
  return (
    <>
      <Input
        placeholder="Search todo."
        onChange={e => {
          setSearchName(e.target.value);
        }}
      />
    </>
  );
};

export default Presenter;
