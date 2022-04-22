import React, { FC } from "react";
import Presenter from "./presenter";
import { LabelType } from "./type";

const Label: FC<LabelType> = ({ href, children, props }) => {
  return (
    <Presenter href={href} {...props}>
      {children}
    </Presenter>
  );
};

export default Label;
