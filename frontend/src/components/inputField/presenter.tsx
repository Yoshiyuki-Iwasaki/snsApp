import React, { FC } from 'react';
import { FiSend } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';
import { PresenterType } from './type';
import { Box, Input, Flex, Button } from '@chakra-ui/react';

const Presenter: FC<PresenterType> = ({ post, addPost, handleInputChange }) => {
  return (
    <Box p="5" borderWidth="1px">
      <form onSubmit={(e) => addPost(e)}>
        <Flex>
          <Input
            mt={2}
            mr={2}
            name="content"
            onChange={handleInputChange}
            value={post.content}
            data-testid="input"
          />
          <Button
            mt={2}
            onClick={(e) => addPost(e)}
            disabled={!post.content || /^\s*$/.test(post.content)}
            data-testid="button"
          >
            <FiSend />
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Presenter;
