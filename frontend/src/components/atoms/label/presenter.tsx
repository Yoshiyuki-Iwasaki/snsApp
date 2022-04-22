import React, { FC } from "react";
import { LabelType } from "./type";
import { Text, Link } from "@chakra-ui/react";

const Presenter: FC<LabelType> = ({ href, children }) => {
  return href ? (
    <>
      <Link href={href}>{children}</Link>
    </>
  ) : (
    <Text>{children}</Text>
  );
};

export default Presenter;
