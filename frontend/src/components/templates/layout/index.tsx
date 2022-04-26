import React, { FC } from "react";
import Header from "../../organisms/header";
import { LayoutType } from "./type";
import { Content } from "./style";
import SignInPage from "../../../page/signInPage";
import useFetchMyUser from "../../../hooks/useFetchMyUser";

const Layout: FC<LayoutType> = ({ children }) => {
  const { myUser, setMyUser } = useFetchMyUser();

  console.log("myUser", myUser);
  return (
    <>
      {myUser && (
        <>
          <Header myUser={myUser} setUser={setMyUser} />
          <Content>{children}</Content>
        </>
      )}
    </>
  );
};

export default Layout;
