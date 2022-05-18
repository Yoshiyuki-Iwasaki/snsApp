import React, { FC } from 'react';
import ListItem from '../../components/listItem';
import { Box, Flex, Text } from '@chakra-ui/react';
import { PresenterType } from './type';

const Presenter: FC<PresenterType> = ({ id, myUser, posts }) => {
  return (
    <>
      <Box height="calc(100vh - 72px)" overflow="scroll">
        <Text>検索結果: {id}</Text>
        <Flex>
          <Box>
            <Text>投稿</Text>
            {posts &&
              posts.map((val) => {
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
          <Box>
            <Text>ユーザー</Text>
            {posts &&
              posts.map((val) => {
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
        </Flex>
      </Box>
    </>
  );
};

export default Presenter;
