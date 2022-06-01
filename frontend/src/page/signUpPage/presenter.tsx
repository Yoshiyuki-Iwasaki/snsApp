import React, { FC } from 'react';
import { Box, Center, FormLabel, Input, Button } from '@chakra-ui/react';
import { SignUpPageType } from './type';

const Presenter: FC<SignUpPageType> = ({
  signUpInfo,
  handleInputChange,
  handleAddUser,
}) => {
  return (
    <Box p="5" w="500px" borderWidth="1px">
      <FormLabel htmlFor="name">name</FormLabel>
      <Input
        name="name"
        data-testid="nameInput"
        value={signUpInfo.name}
        onChange={handleInputChange}
      />
      <FormLabel mt={2} htmlFor="email">
        email
      </FormLabel>
      <Input
        name="email"
        data-testid="emailInput"
        value={signUpInfo.email}
        onChange={handleInputChange}
      />
      <FormLabel mt={2} htmlFor="password">
        password
      </FormLabel>
      <Input
        type="password"
        name="password"
        data-testid="passwordInput"
        value={signUpInfo.password}
        onChange={handleInputChange}
      />
      <FormLabel mt={2} htmlFor="password_confirmation">
        password_confirmation
      </FormLabel>
      <Input
        type="password"
        name="password_confirmation"
        data-testid="password_confirmationInput"
        value={signUpInfo.password_confirmation}
        onChange={handleInputChange}
      />
      <Input type="hidden" name="confirm_success_url" value="/signin" />
      <Center mt={5}>
        <Button data-testid="button" onClick={handleAddUser}>
          新規登録
        </Button>
      </Center>
    </Box>
  );
};

export default Presenter;
