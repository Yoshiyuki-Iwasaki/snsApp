import React, { FC } from 'react';
import { formatDate } from '../../util/data';
import ListItem from '../../components/listItem';
import ListMenu from '../../components/listMenu';
import { FiSend } from 'react-icons/fi';
import { DetailPageType } from './type';
import { Box, Flex, Input, Link, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Presenter: FC<DetailPageType> = ({
  currentPost,
  myUser,
  reply,
  replies,
  modalOpenFrag,
  deletePost,
  handleModal,
  handleInputChange,
  addReply,
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
      </Box>
      <Flex my={5}>
        <Input
          mr={2}
          name={'content'}
          value={reply.content}
          onChange={handleInputChange}
        />
        <Button
          onClick={addReply}
          disabled={!reply.content || /^\s*$/.test(reply.content)}
        >
          <button>
            <FiSend />
          </button>
        </Button>
      </Flex>
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
