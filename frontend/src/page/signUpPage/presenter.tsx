import React, { FC } from 'react';
import { Box, Center, FormLabel, Input, Button } from '@chakra-ui/react';
import { SignUpPageType } from './type';

const Presenter: FC<SignUpPageType> = ({
  user,
  handleInputChange,
  handleAddUser,
}) => {
  return (
    <Box p="5" w="500px" borderWidth="1px">
      <FormLabel htmlFor="name">name</FormLabel>
      <Input name="name" value={user.name} onChange={handleInputChange} />
      <FormLabel mt={2} htmlFor="email">
        email
      </FormLabel>
      <Input name="email" value={user.email} onChange={handleInputChange} />
      <FormLabel mt={2} htmlFor="password">
        password
      </FormLabel>
      <Input
        name="password"
        value={user.password}
        onChange={handleInputChange}
      />
      <FormLabel mt={2} htmlFor="password_confirmation">
        password_confirmation
      </FormLabel>
      <Input
        name="password_confirmation"
        value={user.password_confirmation}
        onChange={handleInputChange}
      />
      <Input type="hidden" name="confirm_success_url" value="/signin" />
      <Center mt={5}>
        <Button onClick={handleAddUser}>新規登録</Button>
      </Center>
    </Box>
  );
};

export default Presenter;
