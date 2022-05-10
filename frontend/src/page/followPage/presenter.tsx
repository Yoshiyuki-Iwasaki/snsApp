import React, { FC } from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import { PresenterType } from './type';
import { motion } from 'framer-motion';

const Presenter: FC<PresenterType> = ({ followingList, followerList }) => {
  return (
    <Box>
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
      <Text fontWeight={700} mt={2}>
        フォロワーリスト
      </Text>
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
  );
};

export default Presenter;
