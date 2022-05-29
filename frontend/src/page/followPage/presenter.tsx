import React, { FC } from 'react';
import { Box, Text, Link, Flex } from '@chakra-ui/react';
import { PresenterType } from './type';
import { motion } from 'framer-motion';
import Profile from '../../components/profile';

const Presenter: FC<PresenterType> = ({ followingList, followerList }) => {
  return (
    <Box p="5">
      <Profile />
      <Flex mt={5}>
        <Box w="50%">
          <Text fontWeight={700}>フォローリスト</Text>
          {followingList &&
            followingList.map((val) => {
              return (
                <Box py={1}>
                  <motion.div whileHover={{ opacity: 0.7 }}>
                    <Link
                      href={'/user/' + val.follower.id}
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Text fontSize="13px">{val.follower.name}さん</Text>
                    </Link>
                  </motion.div>
                </Box>
              );
            })}
        </Box>
        <Box w="50%">
          <Text fontWeight={700}>フォロワーリスト</Text>
          {followerList &&
            followerList.map((val) => {
              return (
                <Box py={1}>
                  <motion.div whileHover={{ opacity: 0.7 }}>
                    <Link
                      href={'/user/' + val.following.id}
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Text fontSize="13px">{val.following.name}さん</Text>
                    </Link>
                  </motion.div>
                </Box>
              );
            })}
        </Box>
      </Flex>
    </Box>
  );
};

export default Presenter;
