import React, { FC } from 'react';
import { FiSend } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';
import { PresenterType } from './type';
import {
  Box,
  Input,
  FormControl,
  Flex,
  Button,
  VStack,
} from '@chakra-ui/react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

const Presenter: FC<PresenterType> = ({ post, addPost, handleInputChange }) => {
  return (
    <Box p="5" borderWidth="1px">
      <form onSubmit={(e) => addPost(e)}>
        <Flex>
          <Input
            mt={2}
            mr={2}
            value={post.content}
            name="content"
            onChange={handleInputChange}
          />
          <Button mt={2} onClick={addPost}>
            <FiSend />
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Presenter;
