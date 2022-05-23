import React, { FC } from 'react';
import { FiSend } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';
import { PresenterType } from './type';
import { Box, Input, Flex, Button } from '@chakra-ui/react';
import { useFormik } from 'formik';

const Presenter: FC<PresenterType> = ({
  initialValues,
  onSubmit,
  validationSchema,
}) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <Box p="5" borderWidth="1px">
      <form onSubmit={(e) => formik.handleSubmit(e)}>
        <Flex>
          <Input
            mt={2}
            mr={2}
            name="content"
            onChange={formik.handleChange}
            value={formik.values.content}
          />
          <Button mt={2} type="submit">
            <FiSend />
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Presenter;
