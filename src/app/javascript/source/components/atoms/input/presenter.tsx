import React, { FC } from "react";
import { FormInput } from "./style";
import { InputType } from "./type";

const Presenter: FC<InputType> = ({ onChange, placeholder }) => {
  return (
    <FormInput type="text" onChange={onChange} placeholder={placeholder} />
  );
};

export default Presenter;
