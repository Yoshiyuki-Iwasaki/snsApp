import React, { FC } from 'react';
import { formatDate } from '../../util/data';
import { FiSend } from 'react-icons/fi';
import { Box, Flex, Input, Text, Button, FormControl } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Presenter: FC<any> = ({
  chats,
  inputChange,
  addChat,
  handleInputChange,
}) => {
  return (
    <>
      {chats &&
        chats.map((val: any) => {
          return (
            <Box py={1}>
              <Flex alignItems={'center'}>
                <Text mr={2} fontSize="13px" fontWeight={700}>
                  {val.user.name}
                </Text>
                <Text fontSize="11px">{formatDate(val.createdAt)}</Text>
              </Flex>
              <Text fontSize="13px">{val.message}</Text>
            </Box>
          );
        })}
      <FormControl onSubmit={addChat}>
        <Flex>
          <Input
            mt={2}
            mr={2}
            name={'content'}
            value={inputChange.content}
            onChange={handleInputChange}
          />
          <Button mt={2} onClick={addChat}>
            <button>
              <FiSend />
            </button>
          </Button>
        </Flex>
      </FormControl>
    </>
  );
};

export default Presenter;
