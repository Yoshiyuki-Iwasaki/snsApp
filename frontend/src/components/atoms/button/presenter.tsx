import React, { FC } from "react";
import { PresenterType } from "./type";
import { CheckIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const Presenter: FC<PresenterType> = ({ children, buttonProps }) => {
  return (
    <Button colorScheme="green" {...buttonProps}>
      {children}
    </Button>
  );
};

export default Presenter;
