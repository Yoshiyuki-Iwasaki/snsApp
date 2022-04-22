import React, { FC } from "react";
import { SaveButtonType } from "./type";
import Presenter from "./presenter";

const SaveButton: FC<SaveButtonType> = ({ children, ...buttonProps }) => {
  return <Presenter {...buttonProps}>{children}</Presenter>;
};

export default SaveButton;
