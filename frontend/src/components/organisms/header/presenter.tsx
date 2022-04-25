import { Container, Button, Flex, Link, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { PresenterType } from "./type";

const Presenter: FC<PresenterType> = ({ myUser, handleLogout }) => {
  console.log("myUser", myUser);
  return (
    <Container my={3}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Link href="/">
          <Text>TODO LIST</Text>
        </Link>
        <Flex alignItems={"center"}>
          {myUser && myUser.isLogin ? (
            <>
              <Link mr={3} href={`/user/${myUser.data.id}`}>
                {myUser.data.name}
              </Link>
              <Button onClick={handleLogout}>ログアウト</Button>
            </>
          ) : (
            <>
              <Link mr={3} href="/signin">
                ログイン
              </Link>
              <Link href="/signup">新規登録</Link>
            </>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Presenter;
