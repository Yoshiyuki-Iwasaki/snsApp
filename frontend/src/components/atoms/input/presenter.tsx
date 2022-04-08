import React, { FC } from "react";
import { FormInput } from "./style";
import { InputType } from "./type";

const Presenter: FC<InputType> = ({ onChange, placeholder, value }) => {
  return (
    <FormInput
      required
      type="text"
      name="name"
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Presenter;
