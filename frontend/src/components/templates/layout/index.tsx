import React, { FC } from "react";
import Header from "../../organisms/header";
import { LayoutType } from "./type";
import { Content } from "./style";

const Layout: FC<LayoutType> = ({ children, user, setUser, fetchUser }) => {
  return (
    <>
      <Header user={user} setUser={setUser} fetchUser={fetchUser} />
      <Content>{children}</Content>
    </>
  );
};

export default Layout;
