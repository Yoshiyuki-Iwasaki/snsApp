import React, { FC } from "react";
import Header from "../header";
import { LayoutType } from "./type";
import { Content } from "./style";

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
