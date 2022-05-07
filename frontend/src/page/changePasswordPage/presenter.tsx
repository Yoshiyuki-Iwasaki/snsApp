import React, { FC } from 'react';
import { Box, Center, FormLabel, Input, Button } from '@chakra-ui/react';

const Presenter: FC<any> = ({
  editProfile,
  handleInputChange,
  handleEditProfile,
}) => {
  return (
    <Box p="5" w="500px" borderWidth="1px">
      <FormLabel htmlFor="email">email</FormLabel>
      <Input
        type="email"
        name="email"
        value={editProfile.email}
        onChange={handleInputChange}
      />
      <Center mt={5}>
        <Button onClick={handleEditProfile}>編集</Button>
      </Center>
    </Box>
  );
};

export default Presenter;
