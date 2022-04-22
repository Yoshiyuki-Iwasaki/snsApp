import React, { FC } from "react";
import { LabelType } from "./type";
import { Text, Link } from "@chakra-ui/react";

const Presenter: FC<LabelType> = ({ href, children, props }) => {
  return href ? (
    <>
      <Link href={href} {...props}>
        {children}
      </Link>
    </>
  ) : (
    <Text {...props}>{children}</Text>
  );
};

export default Presenter;
