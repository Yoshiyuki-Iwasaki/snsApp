import React, { FC } from "react";
import Presenter from "./presenter";
import { LabelType } from "./type";

const Label: FC<LabelType> = ({ children, ...props }) => {
  return <Presenter {...props}>{children}</Presenter>;
};

export default Label;
