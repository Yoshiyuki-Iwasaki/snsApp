import React, { FC } from 'react';
import { PresenterType } from './type';
import { Box, Center, FormLabel, Input, Button } from '@chakra-ui/react';

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
        name="password"
        value={signInInfo.password}
        onChange={handleInputChange}
      />
      <Center mt={5}>
        <Button onClick={handleLogin}>ログイン</Button>
      </Center>
    </Box>
  );
};

export default Presenter;
