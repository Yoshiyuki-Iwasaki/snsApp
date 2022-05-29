import React, { FC } from 'react';
import ListItem from '../../components/listItem';
import { Flex, Box, Center, Text } from '@chakra-ui/react';
import { PresenterType } from './type';
import Profile from '../../components/profile';

const Presenter: FC<PresenterType> = ({ myUser, myPost, likedPost }) => {
  return (
    <Box p="5">
      <Profile />
      <Flex mt={5}>
        <Box mx={1} w="50%">
          <Center>
            <Text fontSize="16px" fontWeight="700">
              投稿一覧
            </Text>
          </Center>
          <Box mt={3} height="calc(100vh - (72px + 320px))" overflow="scroll">
            {myPost &&
              myPost.map((val) => {
                return (
                  <ListItem
                    key={val.id}
                    myUser={myUser}
                    postedUser={val.user}
                    val={val}
                  />
                );
              })}
          </Box>
        </Box>
        <Box mx={1} w="50%">
          <Center>
            <Text fontSize="16px" fontWeight="700">
              いいねした投稿
            </Text>
          </Center>
          <Box mt={3} height="calc(100vh - (72px + 320px))" overflow="scroll">
            {likedPost &&
              likedPost.map((val) => {
                return (
                  val.post && (
                    <>
                      <ListItem
                        key={val.id}
                        myUser={myUser}
                        postedUser={val.post.user}
                        val={val.post}
                      />
                    </>
                  )
                );
              })}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Presenter;
