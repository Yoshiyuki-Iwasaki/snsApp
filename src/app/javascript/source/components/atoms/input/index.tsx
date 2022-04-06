import React, { FC } from "react";
import Presenter from "./presenter";
import { InputType } from "./type";

const Input: FC<InputType> = ({ onChange, placeholder }) => {
  return <Presenter onChange={onChange} placeholder={placeholder} />;
};

export default Input;
