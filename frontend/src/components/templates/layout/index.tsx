import React, { FC } from "react";
import Header from "../../organisms/header";
import { LayoutType } from "./type";
import { Content } from "./style";

const Layout: FC<LayoutType> = ({ children, user, setUser }) => {
  return (
    <>
      <Header user={user} setUser={setUser} />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
