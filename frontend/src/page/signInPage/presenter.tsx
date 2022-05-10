import React, { FC } from 'react';
import { PresenterType } from './type';
import { Box, Center, FormLabel, Input, Button, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Presenter: FC<PresenterType> = ({
  signInInfo,
  handleInputChange,
  handleLogin,
}) => {
  return (
    <Box p="5" w="500px" borderWidth="1px">
      <FormLabel htmlFor="email">email</FormLabel>
      <Input
        name="email"
        value={signInInfo.email}
        onChange={handleInputChange}
      />
      <FormLabel mt={2} htmlFor="password">
        password
      </FormLabel>
      <Input
        type="password"
        name="password"
        value={signInInfo.password}
        onChange={handleInputChange}
      />
      <Center mt={5}>
        <motion.div whileHover={{ opacity: 0.7 }}>
          <Link href="/change_password" _hover={{ textDecoration: 'none' }}>
            パスワードリセット
          </Link>
        </motion.div>
      </Center>
      <Center mt={2}>
        <Button onClick={handleLogin}>ログイン</Button>
      </Center>
    </Box>
  );
};

export default Presenter;
