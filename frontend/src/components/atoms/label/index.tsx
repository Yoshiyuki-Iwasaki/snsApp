import React, { FC } from "react";
import Presenter from "./presenter";
import { LabelType } from "./type";

const Label: FC<LabelType> = ({ href, children }) => {
  return <Presenter href={href} children={children}></Presenter>;
};

export default Label;
