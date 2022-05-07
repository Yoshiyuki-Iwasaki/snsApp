import React, { FC } from 'react';
import { formatDate } from '../../util/data';
import { PresenterType } from './type';
import { Box, Flex, Text, Button, Link } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import ListMenu from '../listMenu';

const Presenter: FC<PresenterType> = ({
  val,
  myUser,
  postedUser,
  favorite,
  modalOpenFrag,
  handleLike,
  handleUnlike,
  handleModal,
  deleteTodo,
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
        deleteTodo={deleteTodo}
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
              <Text fontSize="15px">{val.name}</Text>
            </Box>
          </Box>
        ) : (
          <Link href={'/todo/' + val.id}>
            <Flex>
              <Box mr={5}>
                <Text fontSize="14px" fontWeight="700">
                  {postedUser.name}
                </Text>
              </Box>
              <Text fontSize="13px">{formatDate(val.createdAt)}</Text>
            </Flex>
            <Box mt={2} mr={3}>
              <Text fontSize="15px">{val.name}</Text>
            </Box>
          </Link>
        ))}
      <Flex mt={3} alignItems="center">
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
          <Text fontSize="13px">{favorite && favorite.isFavorite.length}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Presenter;
