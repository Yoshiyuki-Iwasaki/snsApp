import React, { FC } from "react";
import Header from "../../organisms/header";
import { LayoutType } from "./type";
import { Content } from "./style";
import SignInPage from "../../../page/signInPage";
import useFetchUser from "../../../hooks/useFetchUser";

const Layout: FC<LayoutType> = ({ children }) => {
  const { myUser, setMyUser } = useFetchUser();

  console.log("myUser", myUser);
  return (
    <>
      {myUser && (
        <>
          <Header myUser={myUser} setUser={setMyUser} />
          <Content>{myUser.isLogin ? <>{children}</> : <SignInPage />}</Content>
        </>
      )}
    </>
  );
};

export default Layout;
