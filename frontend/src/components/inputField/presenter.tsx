import React, { FC } from 'react';
import { FiSend } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';
import { PresenterType } from './type';
import { Box, Input, FormControl, Flex, Button } from '@chakra-ui/react';

const Presenter: FC<PresenterType> = ({ post, addPost, handleInputChange }) => {
  return (
    <Box p="5" borderWidth="1px">
      <FormControl onSubmit={addPost}>
        <Flex>
          <Input
            mt={2}
            mr={2}
            name={'content'}
            value={post.content}
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