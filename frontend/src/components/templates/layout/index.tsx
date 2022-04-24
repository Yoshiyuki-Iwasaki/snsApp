import React, { FC } from "react";
import Header from "../../organisms/header";
import { LayoutType } from "./type";
import { Content } from "./style";
import SigninPage from "../../../page/signInPage";

const Layout: FC<LayoutType> = ({ children, myUser, setUser, fetchUser }) => {
  return (
    <>
      <Header myUser={myUser} setUser={setUser} />
      <Content>
        {!myUser ? <SigninPage fetchUser={fetchUser} /> : <>{children}</>}
      </Content>
    </>
  );
};

export default Layout;
