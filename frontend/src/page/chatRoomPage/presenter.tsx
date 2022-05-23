import React, { FC } from 'react';
import { formatDate } from '../../util/data';
import { FiSend } from 'react-icons/fi';
import {
  Box,
  Flex,
  Input,
  Text,
  Link,
  Button,
  FormControl,
  Center,
  HStack,
} from '@chakra-ui/react';
import { PresenterType } from './type';

const Presenter: FC<PresenterType> = ({
  myUser,
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
              <>
                {myUser && val.user.id === myUser.data.id ? (
                  <Flex my={2} justifyContent="flex-end">
                    <Box p={3} w="40%" borderWidth="1px" borderRadius={8}>
                      <HStack>
                        <Link
                          href={`/user/` + val.user.id}
                          mr={2}
                          fontSize="13px"
                          fontWeight={700}
                        >
                          {val.user.name}
                        </Link>
                        <Text fontSize="11px">{formatDate(val.createdAt)}</Text>
                      </HStack>
                      <Text fontSize="13px">{val.message}</Text>
                    </Box>
                  </Flex>
                ) : (
                  <Flex my={2} justifyContent="flex-start">
                    <Box p={3} w="40%" borderWidth="1px" borderRadius={8}>
                      <HStack>
                        <Link
                          href={`/user/` + val.user.id}
                          mr={2}
                          fontSize="13px"
                          fontWeight={700}
                        >
                          {val.user.name}
                        </Link>
                        <Text fontSize="11px">{formatDate(val.createdAt)}</Text>
                      </HStack>
                      <Text fontSize="13px">{val.message}</Text>
                    </Box>
                  </Flex>
                )}
              </>
            );
          })}
      </Box>
      <Center>
        <form onSubmit={(e) => addChat(e)}>
          <FormControl width={'568px'} paddingBottom={5} backgroundColor="#fff">
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
        </form>
      </Center>
    </>
  );
};

export default Presenter;
