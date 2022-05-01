import React, { FC } from "react";
import Button from "../../components/atoms/button";
import ListItem from "../../components/molecules/listItem";
import { Flex, Box, Center, Image, Text } from "@chakra-ui/react";
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
    <Box p="5">
      <Center>
        <Box boxSize="100px">
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </Box>
      </Center>
      <Center mt={3}>
        <Text fontSize="18px" fontWeight="700">
          {user && user.name}
        </Text>
      </Center>
      <Center>
        <Flex mt={2}>
          <Flex mr={3}>
            <Box mr={2}>
              <Text fontSize="14px" fontWeight="700">
                フォロー数
              </Text>
            </Box>
            <Text fontSize="14px" fontWeight="700">
              {follow && follow.data.isRelationshipFollowing.length}
            </Text>
          </Flex>
          <Flex>
            <Box mr={2}>
              <Text fontSize="14px" fontWeight="700">
                フォロワー数
              </Text>
            </Box>
            <Text fontSize="14px" fontWeight="700">
              {follow && follow.data.isRelationshipFollowed.length}
            </Text>
          </Flex>
        </Flex>
      </Center>
      <Box mt={3}>
        {/* マイページ以外のユーザーページにフォローボタンを表示させる */}
        {myUser && myUser.data.id !== parseInt(params.id) ? (
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
          <Box mx={1} w="50%">
            <Text fontSize="16px" fontWeight="700">
              投稿一覧
            </Text>
            {myPost &&
              myPost.data.map(val => {
                return (
                  <ListItem
                    key={val.id}
                    myUser={myUser}
                    user={val.user}
                    val={val}
                  />
                );
              })}
          </Box>
          <Box mx={1} w="50%">
            <Text fontSize="16px" fontWeight="700">
              いいねした投稿
            </Text>
            {likedPost.data &&
              likedPost.data.map(val => {
                return (
                  <ListItem
                    key={val.id}
                    myUser={myUser}
                    user={val.user}
                    val={val.todo}
                  />
                );
              })}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Presenter;
