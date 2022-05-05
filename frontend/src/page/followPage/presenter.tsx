import React, { FC } from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import { formatDate } from '../../util/data';
import { PresenterType } from './type';

const Presenter: FC<PresenterType> = ({ followingList, followerList }) => {
  console.log('followingList', followingList);
  console.log('followerList', followerList);
  return (
    <>
      <Box>
        <Text>フォローリスト</Text>
        {followingList &&
          followingList.map((val) => {
            return (
              <>
                <Box>
                  <Link href={'/user/' + val.follower.id}>
                    <Text fontSize="13px">{val.follower.name}さん</Text>
                  </Link>
                </Box>
              </>
            );
          })}
        <Text>フォロワーリスト</Text>
        {followerList &&
          followerList.map((val) => {
            return (
              <>
                <Box>
                  <Link href={'/user/' + val.following.id}>
                    <Text fontSize="13px">{val.following.name}さん</Text>
                  </Link>
                </Box>
              </>
            );
          })}
      </Box>
    </>
  );
};

export default Presenter;
