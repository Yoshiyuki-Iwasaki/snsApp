import React, { FC } from 'react';
import { Box, Text, Link, Center, Flex, Image } from '@chakra-ui/react';
import { PresenterType } from './type';
import { motion } from 'framer-motion';

const Presenter: FC<PresenterType> = ({
  params,
  postedUser,
  follow,
  followingList,
  followerList,
}) => {
  console.log('postedUser', postedUser);
  console.log('follow', follow);
  return (
    <Box p="5">
      <Center>
        <Box boxSize="100px">
          <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
        </Box>
      </Center>
      <Center mt={3}>
        <Text fontSize="18px" fontWeight="700">
          {postedUser && postedUser.name}
        </Text>
      </Center>
      <Center>
        <Flex mt={2}>
          <motion.div whileHover={{ opacity: 0.7 }}>
            <Link
              mr={3}
              href={'/user/' + Number(params.id) + '/follow'}
              _hover={{ textDecoration: 'none' }}
            >
              <Flex>
                <Text mr={1} fontSize="14px" fontWeight="700">
                  フォロー数
                </Text>
                <Text fontSize="14px" fontWeight="700">
                  {follow && follow.isRelationshipFollowing.length}
                </Text>
              </Flex>
            </Link>
          </motion.div>
          <motion.div whileHover={{ opacity: 0.7 }}>
            <Link
              href={'/user/' + Number(params.id) + '/follow'}
              _hover={{ textDecoration: 'none' }}
            >
              <Flex>
                <Text mr={1} fontSize="14px" fontWeight="700">
                  フォロワー数
                </Text>
                <Text fontSize="14px" fontWeight="700">
                  {follow && follow.isRelationshipFollowed.length}
                </Text>
              </Flex>
            </Link>
          </motion.div>
        </Flex>
      </Center>
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
