import React, { FC } from 'react';
import { PresenterType } from './type';
import { Flex, Box, Center, Image, Text, Button, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Presenter: FC<any> = ({
  chatRoom,
  postedUser,
  follow,
  checkedFollow,
  myUser,
  params,
  handleUnfollow,
  handleFollow,
}) => {
  return (
    <>
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
      {/* マイページ以外のユーザーページにフォローボタンを表示させる */}
      {checkedFollow &&
        follow &&
        myUser &&
        myUser.data.id !== Number(params.id) && (
          <>
            <Center mt={3}>
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
            </Center>
            {checkedFollow.relationship.length ? (
              <Center mt={1}>
                <Text>フォローされてます。</Text>
              </Center>
            ) : (
              ''
            )}
          </>
        )}
    </>
  );
};

export default Presenter;
