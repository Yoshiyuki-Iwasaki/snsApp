import React, { FC } from 'react';
import { formatDate } from '../../util/data';
import ListItem from '../../components/listItem';
import ListMenu from '../../components/listMenu';
import { FiSend } from 'react-icons/fi';
import { StarIcon } from '@chakra-ui/icons';
import { DetailPageType } from './type';
import { Box, Flex, Input, Link, Text, Button, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Presenter: FC<DetailPageType> = ({
  currentPost,
  myUser,
  reply,
  replies,
  modalOpenFrag,
  favorite,
  deletePost,
  handleModal,
  handleInputChange,
  addReply,
  handleLike,
  handleUnlike,
}) => {
  return (
    <>
      <Box p={3} borderWidth="1px" position="relative">
        <ListMenu
          myUser={myUser}
          postedUser={currentPost.user}
          modalOpenFrag={modalOpenFrag}
          val={currentPost}
          handleModal={handleModal}
          deletePost={deletePost}
        />
        <Flex>
          {currentPost.user && (
            <Box mr={3}>
              <motion.div whileHover={{ opacity: 0.7 }}>
                <Link
                  href={'/user/' + currentPost.user.id}
                  _hover={{ textDecoration: 'none' }}
                >
                  <Text fontSize="14px" fontWeight="700">
                    {currentPost.user && currentPost.user.name}
                  </Text>
                </Link>
              </motion.div>
            </Box>
          )}
          <Text fontSize="13px">{formatDate(currentPost.createdAt)}</Text>
        </Flex>
        <Box mt={3}>
          <Text fontSize="15px">{currentPost.content}</Text>
        </Box>
        <HStack mt={3}>
          {favorite && favorite.favorite.length ? (
            <Button
              m={0}
              p={0}
              minWidth={0}
              height={30}
              width={30}
              bg="#FF69b4"
              onClick={handleUnlike}
            >
              <StarIcon w={3} h={3} color="#fff" />
            </Button>
          ) : (
            <Button
              m={0}
              p={0}
              minWidth={0}
              height={30}
              width={30}
              onClick={handleLike}
            >
              <StarIcon w={3} h={3} />
            </Button>
          )}
          <Box ml={3}>
            <Text fontSize="13px">
              {favorite && favorite.isFavorite.length}
            </Text>
          </Box>
        </HStack>
      </Box>
      <form onSubmit={(e) => addReply(e)}>
        <Flex my={5}>
          <Input
            mr={2}
            name={'content'}
            value={reply.content}
            onChange={handleInputChange}
          />
          <Button
            onClick={(e) => addReply(e)}
            disabled={!reply.content || /^\s*$/.test(reply.content)}
          >
            <FiSend />
          </Button>
        </Flex>
      </form>
      <Box mt={2}>
        {replies &&
          replies.map((val) => {
            return (
              <ListItem
                key={val.id}
                myUser={myUser}
                postedUser={val.user}
                val={val}
                replyFrag={true}
              />
            );
          })}
      </Box>
    </>
  );
};

export default Presenter;
