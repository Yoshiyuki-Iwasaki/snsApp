import React, { FC } from 'react';
import { Box, Center, FormLabel, Input, Button } from '@chakra-ui/react';
import { PresenterType } from './type';

const Presenter: FC<PresenterType> = ({
  editProfile,
  handleInputChange,
  handleEditProfile,
}) => {
  return (
    <Box p="5" w="500px" borderWidth="1px">
      <FormLabel htmlFor="password">パスワード</FormLabel>
      <Input
        name="password"
        value={editProfile.password}
        onChange={handleInputChange}
      />
      <FormLabel mt={2} htmlFor="password_confirmation">
        確認パスワード
      </FormLabel>
      <Input
        name="password_confirmation"
        value={editProfile.password_confirmation}
        onChange={handleInputChange}
      />
      <Center mt={5}>
        <Button onClick={handleEditProfile}>編集</Button>
      </Center>
    </Box>
  );
};

export default Presenter;
