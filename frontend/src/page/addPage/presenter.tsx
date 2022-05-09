import React, { FC } from 'react';
import { FiSend } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';
import { PresenterType } from './type';
import { Box, Input, FormControl, Flex, Text, Button } from '@chakra-ui/react';

const Presenter: FC<PresenterType> = ({ post, addPost, handleInputChange }) => {
  return (
    <Box p="5" borderWidth="1px">
      <Text fontSize="15px" fontWeight="700">
        新規投稿
      </Text>
      <FormControl onSubmit={addPost}>
        <Flex>
          <Input
            mt={2}
            mr={2}
            name={'name'}
            value={post.name}
            onChange={handleInputChange}
          />
          <Button mt={2} onClick={addPost}>
            <button>
              <FiSend />
            </button>
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default Presenter;
