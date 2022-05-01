import React, { FC } from "react";
import { LabelType } from "./type";
import { Text } from "@chakra-ui/react";

const Presenter: FC<LabelType> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default Presenter;
