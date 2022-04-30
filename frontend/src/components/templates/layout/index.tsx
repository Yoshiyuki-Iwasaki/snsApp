import React, { FC } from "react";
import Header from "../../organisms/header";
import { LayoutType } from "./type";
import { Center } from "@chakra-ui/react";

import useFetchMyUser from "../../../hooks/useFetchMyUser";

const Layout: FC<LayoutType> = ({ children }) => {
  const { myUser, setMyUser } = useFetchMyUser();

  console.log("myUser", myUser);
  return (
    <>
      {myUser && (
        <>
          <Header myUser={myUser} setUser={setMyUser} />
          <Center minH="calc(100vh - (24px + 2rem))">{children}</Center>
        </>
      )}
    </>
  );
};

export default Layout;
