import React, { FC } from "react";
import Header from "../../organisms/header";
import { LayoutType } from "./type";
import { Container, Center } from "@chakra-ui/react";

import useFetchMyUser from "../../../hooks/useFetchMyUser";

const Layout: FC<LayoutType> = ({ children }) => {
  const { myUser, setMyUser } = useFetchMyUser();
  return (
    <>
      {myUser && (
        <>
          <Center>
            <Container maxW="600px">
              <Header myUser={myUser} setUser={setMyUser} />
            </Container>
          </Center>
          <Center minH="calc(100vh - (24px + 2rem))" alignItems="flex-start">
            <Container maxW="600px">{children}</Container>
          </Center>
        </>
      )}
    </>
  );
};

export default Layout;
