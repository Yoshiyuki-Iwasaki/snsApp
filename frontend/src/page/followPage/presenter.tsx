import React, { FC } from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import { PresenterType } from './type';

const Presenter: FC<PresenterType> = ({ followingList, followerList }) => {
  return (
    <Box>
      <Text>フォローリスト</Text>
      {followingList &&
        followingList.map((val) => {
          return (
            <Box py={1}>
              <Link href={'/user/' + val.follower.id}>
                <Text fontSize="13px">{val.follower.name}さん</Text>
              </Link>
            </Box>
          );
        })}
      <Text mt={2}>フォロワーリスト</Text>
      {followerList &&
        followerList.map((val) => {
          return (
            <Box py={1}>
              <Link href={'/user/' + val.following.id}>
                <Text fontSize="13px">{val.following.name}さん</Text>
              </Link>
            </Box>
          );
        })}
    </Box>
  );
};

export default Presenter;
