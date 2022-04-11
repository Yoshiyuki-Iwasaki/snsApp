import React, { FC } from "react";
import Presenter from "./presenter";
import { InputType } from "./type";

const Input: FC<InputType> = ({ onChange, placeholder, name }) => {
  return (
    <Presenter onChange={onChange} placeholder={placeholder} name={name} />
  );
};

export default Input;
