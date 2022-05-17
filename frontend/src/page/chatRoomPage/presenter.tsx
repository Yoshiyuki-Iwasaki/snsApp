import React, { FC } from 'react';
import { formatDate } from '../../util/data';
import { FiSend } from 'react-icons/fi';
import {
  Box,
  Flex,
  Input,
  Text,
  Button,
  FormControl,
  Center,
} from '@chakra-ui/react';
import { PresenterType } from './type';

const Presenter: FC<PresenterType> = ({
  chats,
  inputChange,
  addChat,
  handleInputChange,
}) => {
  return (
    <>
      <Box height="calc(100vh - 135px)" overflow="scroll">
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
      </Box>
      <Center>
        <FormControl
          onSubmit={addChat}
          width={'568px'}
          paddingBottom={5}
          backgroundColor="#fff"
        >
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
      </Center>
    </>
  );
};

export default Presenter;
