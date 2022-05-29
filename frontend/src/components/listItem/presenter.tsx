import React, { FC } from 'react';
import { formatDate } from '../../util/data';
import { PresenterType } from './type';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import ListMenu from '../listMenu';
import { motion } from 'framer-motion';
import Like from '../Like';

const Presenter: FC<PresenterType> = ({
  val,
  myUser,
  postedUser,
  modalOpenFrag,
  handleModal,
  deletePost,
  replyFrag,
}) => {
  return (
    <Box my={2} p={3} borderWidth="1px" position="relative">
      <ListMenu
        myUser={myUser}
        postedUser={postedUser}
        replyFrag={replyFrag}
        modalOpenFrag={modalOpenFrag}
        val={val}
        handleModal={handleModal}
        deletePost={deletePost}
      />
      {val &&
        (replyFrag ? (
          <Box>
            <Flex>
              <Box mr={5}>
                <Text fontSize="14px" fontWeight="700">
                  {postedUser.name}
                </Text>
              </Box>
              <Text fontSize="13px">{formatDate(val.createdAt)}</Text>
            </Flex>
            <Box mt={2} mr={3}>
              <Text fontSize="15px">{val.content}</Text>
            </Box>
          </Box>
        ) : (
          <Link href={'/post/' + val.id} _hover={{ textDecoration: 'none' }}>
            <motion.div whileHover={{ opacity: 0.7 }}>
              <Flex>
                <Box mr={5}>
                  <Text fontSize="14px" fontWeight="700">
                    {postedUser.name}
                  </Text>
                </Box>
                <Text fontSize="13px">{formatDate(val.createdAt)}</Text>
              </Flex>
              <Box mt={2} mr={3}>
                <Text fontSize="15px">{val.content}</Text>
              </Box>
            </motion.div>
          </Link>
        ))}
      <Like myUser={myUser} val={val} replyFrag={replyFrag} />
    </Box>
  );
};

export default Presenter;
