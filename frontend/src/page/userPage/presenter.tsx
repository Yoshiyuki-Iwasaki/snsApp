import React, { FC } from 'react';
import ListItem from '../../components/listItem';
import { Flex, Box, Center, Image, Text, Button, Link } from '@chakra-ui/react';
import { PresenterType } from './type';
import { motion } from 'framer-motion';

const Presenter: FC<PresenterType> = ({
  chatRoom,
  postedUser,
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
      <Box mt={3}>
        <Center>
          {/* マイページ以外のユーザーページにフォローボタンを表示させる */}
          {follow && myUser && myUser.data.id !== Number(params.id) && (
            <>
              {follow.relationship.length ? (
                <Button onClick={handleUnfollow}>フォロー削除</Button>
              ) : (
                <Button onClick={handleFollow}>フォロー</Button>
              )}
              {chatRoom && (
                <motion.div whileHover={{ opacity: 0.7 }}>
                  <Link
                    ml={2}
                    href={'/chatRoom/' + chatRoom.room.id}
                    _hover={{ textDecoration: 'none' }}
                  >
                    チャット
                  </Link>
                </motion.div>
              )}
            </>
          )}
        </Center>
        <Flex mt={5}>
          <Box mx={1} w="50%">
            <Text fontSize="16px" fontWeight="700">
              投稿一覧
            </Text>
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
          <Box mx={1} w="50%">
            <Text fontSize="16px" fontWeight="700">
              いいねした投稿
            </Text>
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
        </Flex>
      </Box>
    </Box>
  );
};

export default Presenter;
