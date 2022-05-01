import { Button, Flex, Link, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { PresenterType } from "./type";

const Presenter: FC<PresenterType> = ({ myUser, handleLogout }) => {
  return (
    <Flex px={5} py={3} alignItems={"center"} justifyContent={"space-between"}>
      <Link href="/">
        <Text fontSize={22} fontWeight={700}>
          TODO LIST
        </Text>
      </Link>
      <Flex alignItems={"center"}>
        {myUser && myUser.isLogin ? (
          <>
            <Link mr={3} href={`/new`} fontSize={14}>
              新規投稿
            </Link>
            <Link mr={3} href={`/user/${myUser.data.id}`} fontSize={14}>
              {myUser.data.name}
            </Link>
            <Button onClick={handleLogout} fontSize={14}>
              ログアウト
            </Button>
          </>
        ) : (
          <>
            <Link mr={3} href="/" fontSize={14}>
              ログイン
            </Link>
            <Link href="/signup" fontSize={14}>
              新規登録
            </Link>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Presenter;
