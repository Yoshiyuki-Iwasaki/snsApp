import React, { FC } from 'react';
import { formatDate } from '../../util/data';
import ListItem from '../../components/listItem';
import { FiSend } from 'react-icons/fi';
import { DetailPageType } from './type';
import { Box, Flex, Input, Link, Text, Button } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

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
        <Button
          m={0}
          p={0}
          w={30}
          h={30}
          minWidth={0}
          minHeight={0}
          lineHeight={1}
          position="absolute"
          top={2}
          right={3}
          onClick={handleModal}
        >
          <HamburgerIcon />
        </Button>
        {modalOpen && (
          <Box position="absolute" top={2} right={16}>
            <Box>
              <Link href={'/todo/' + params.id + '/edit'} fontSize="13px">
                編集
              </Link>
            </Box>
            <Box>
              <Button
                m={0}
                p={0}
                minWidth={0}
                height="auto"
                width="auto"
                bgColor="#fff"
                fontSize="13px"
                fontWeight={400}
                onClick={deleteTodo}
              >
                削除
              </Button>
            </Box>
          </Box>
        )}
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
