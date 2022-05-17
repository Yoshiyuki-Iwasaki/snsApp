import React, { FC } from 'react';
import { Box, Center, FormLabel, Input, Button } from '@chakra-ui/react';
import { PresenterType } from './type';

const Presenter: FC<PresenterType> = ({
  editProfile,
  handleInputChange,
  handleEditProfile,
  onChangeImage,
}) => {
  return (
    <Box p="5" w="500px" borderWidth="1px">
      <FormLabel htmlFor="image">image</FormLabel>
      <input name="image" type="file" onChange={onChangeImage} />
      <FormLabel htmlFor="name">name</FormLabel>
      <Input
        name="name"
        value={editProfile.name}
        onChange={handleInputChange}
      />
      <FormLabel mt={2} htmlFor="email">
        email
      </FormLabel>
      <Input
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
