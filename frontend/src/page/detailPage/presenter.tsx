import React, { FC } from 'react';
import { formatDate } from '../../util/data';
import ListItem from '../../components/listItem';
import ListMenu from '../../components/listMenu';
import { FiSend } from 'react-icons/fi';
import { DetailPageType } from './type';
import { Box, Flex, Input, Link, Text, Button } from '@chakra-ui/react';

const Presenter: FC<DetailPageType> = ({
  params,
  currentTodo,
  myUser,
  reply,
  replies,
  modalOpen,
  deleteTodo,
  handleModal,
  handleInputChange,
  addReply,
}) => {
  return (
    <>
      <Box p={3} borderWidth="1px" position="relative">
        <ListMenu
          myUser={myUser}
          user={currentTodo.user}
          modalOpen={modalOpen}
          val={currentTodo}
          handleModal={handleModal}
          deleteTodo={deleteTodo}
        />
        <Flex>
          {currentTodo.user && (
            <Box mr={3}>
              <Link href={'/user/' + currentTodo.user.id}>
                <Text fontSize="14px" fontWeight="700">
                  {currentTodo.user && currentTodo.user.name}
                </Text>
              </Link>
            </Box>
          )}
          <Text fontSize="13px">{formatDate(currentTodo.createdAt)}</Text>
        </Flex>
        <Box mt={3}>
          <Text fontSize="15px">{currentTodo.name}</Text>
        </Box>
      </Box>
      <Box mt={3}>
        <Flex>
          <Input
            mt={3}
            mr={2}
            name={'name'}
            value={reply.name}
            onChange={handleInputChange}
          />
          <Button
            mt={3}
            onClick={addReply}
            disabled={!reply.name || /^\s*$/.test(reply.name)}
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
                  user={val.user}
                  val={val}
                  detailPageFrag={true}
                />
              );
            })}
        </Box>
      </Box>
    </>
  );
};

export default Presenter;
