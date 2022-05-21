import React, { FC } from 'react';
import ListItem from '../../components/listItem';
import { Box, Flex, Text, Center, Link } from '@chakra-ui/react';
import { PresenterType } from './type';
import { motion } from 'framer-motion';

const Presenter: FC<PresenterType> = ({ id, myUser, posts, users }) => {
  return (
    <Box mt={5}>
      <Box height="calc(100vh - 72px)" overflow="scroll">
        <Text>検索結果: {id}</Text>
        <Flex mt={5}>
          <Box width="50%">
            <Center>
              <Text fontSize="16px" fontWeight="700">
                投稿
              </Text>
            </Center>
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
          <Box mx="1" width="50%">
            <Center>
              <Text fontSize="16px" fontWeight="700">
                ユーザー
              </Text>
            </Center>
            {users &&
              users.map((val) => {
                return (
                  <motion.div whileHover={{ opacity: 0.7 }}>
                    <Link
                      href={'/user/' + val.id}
                      _hover={{ textDecoration: 'none' }}
                    >
                      {val.name}
                    </Link>
                  </motion.div>
                );
              })}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Presenter;
