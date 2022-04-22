import React, { FC } from "react";
import { SaveButtonProps } from "./type";
import Presenter from "./presenter";

const SaveButton: FC<SaveButtonProps> = props => {
  const { children, ...buttonProps } = props;
  return <Presenter children={children} buttonProps={buttonProps} />;
};

export default SaveButton;
