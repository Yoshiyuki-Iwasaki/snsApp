import React, { FC } from 'react';
import { PresenterType } from './type';
import {
  Text,
  Box,
  Center,
  FormLabel,
  Input,
  Button,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
const Presenter: FC<PresenterType> = ({
  initialValues,
  validationSchema,
  onSubmit,
}) => {
  const formik: any = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <Box p="5" w="500px" borderWidth="1px">
      <form onSubmit={(e) => formik.handleSubmit(e)}>
        <Box>
          <FormLabel htmlFor="email">email</FormLabel>
          <Input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors && (
            <Text mt={1} fontSize={14} color="red">
              {formik.errors.email}
            </Text>
          )}
        </Box>
        <Box>
          <FormLabel mt={2} htmlFor="password">
            password
          </FormLabel>
          <Input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors && (
            <Text mt={1} fontSize={14} color="red">
              {formik.errors.password}
            </Text>
          )}
        </Box>
        <Center mt={5}>
          <motion.div whileHover={{ opacity: 0.7 }}>
            <Link href="/change_password" _hover={{ textDecoration: 'none' }}>
              パスワードリセット
            </Link>
          </motion.div>
        </Center>
        <Center mt={2}>
          <Button type="submit">ログイン</Button>
        </Center>
      </form>
    </Box>
  );
};

export default Presenter;
