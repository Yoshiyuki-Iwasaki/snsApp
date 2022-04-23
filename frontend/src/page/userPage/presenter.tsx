import React, { FC } from "react";
import Label from "../../components/atoms/label";
import Button from "../../components/atoms/button";
import ListItem from "../../components/molecules/listItem";
import { Flex, Box } from "@chakra-ui/react";
import { PresenterType } from "./type";

const Presenter: FC<PresenterType> = ({
  user,
  follow,
  myUser,
  myPost,
  likedPost,
  params,
  handleUnfollow,
  handleFollow,
}) => {
  return (
    <>
      <Label>{user && user.name}</Label>
      <Flex mt={3}>
        <Flex mr={3}>
          <Box mr={2}>
            <Label>フォロー数</Label>
          </Box>
          <Label>{follow && follow.data.isRelationshipFollowing.length}</Label>
        </Flex>
        <Flex>
          <Box mr={2}>
            <Label>フォロワー数</Label>
          </Box>
          <Label>{follow && follow.data.isRelationshipFollowed.length}</Label>
        </Flex>
      </Flex>
      <Box mt={3}>
        {/* マイページ以外のユーザーページにフォローボタンを表示させる */}
        {myUser && myUser.id !== parseInt(params.id) ? (
          <>
            {follow && follow.data.relationship.length ? (
              <Button onClick={handleUnfollow}>フォロー削除</Button>
            ) : (
              <Button onClick={handleFollow}>フォロー</Button>
            )}
          </>
        ) : (
          ""
        )}
        <Flex mt={5}>
          <Box w="50%">
            <Label>投稿一覧</Label>
            {myPost &&
              myPost.data.map(val => {
                return (
                  <ListItem
                    key={val.id}
                    myuser={myUser}
                    user={val.user}
                    val={val}
                  />
                );
              })}
          </Box>
          <Box w="50%">
            <Label>いいねした投稿</Label>
            {likedPost.data &&
              likedPost.data.map(val => {
                return (
                  <ListItem
                    key={val.id}
                    myuser={myUser}
                    user={val.user}
                    val={val.todo}
                  />
                );
              })}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Presenter;
